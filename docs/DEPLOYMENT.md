# Deployment Guide

This guide covers deploying the Medical Conference Landing Page to various platforms.

## 🚀 Vercel (Recommended)

### Automatic Deployment
The project is configured for automatic deployment to Vercel:

1. **GitHub Integration**: Connected to GitHub repository
2. **Auto Deploy**: Pushes to `main` branch trigger production deployments
3. **Preview Deployments**: Pull requests get preview URLs
4. **Environment Variables**: Managed through Vercel dashboard

### Manual Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod

# Deploy preview
vercel
```

### Environment Variables
Set these in your Vercel dashboard:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

## 🌐 Other Platforms

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Deploy

### AWS Amplify
1. Connect repository
2. Build settings are auto-detected
3. Configure environment variables
4. Deploy

### Docker
Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
```

## 🔧 Configuration

### Build Optimization
The project includes several optimizations:
- Image optimization with Next.js
- Automatic code splitting
- Static generation where possible
- Bundle analysis available

### Performance Monitoring
- Lighthouse CI in GitHub Actions
- Core Web Vitals tracking
- Build size monitoring
- Performance budgets

### Security
- Environment variable validation
- Secure headers configuration
- Content Security Policy
- HTTPS enforcement

## 📊 Monitoring

### Analytics
Add analytics tracking:
```typescript
// In your layout.tsx or _app.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Error Tracking
Consider adding error tracking:
- Sentry for error monitoring
- LogRocket for session replay
- Vercel Analytics for performance

## 🚨 Troubleshooting

### Common Issues

#### Build Failures
- Check Node.js version (18+)
- Verify all dependencies are installed
- Run `npm run type-check` locally

#### Performance Issues
- Optimize images
- Check bundle size with `npm run build`
- Review Core Web Vitals

#### Deployment Errors
- Check environment variables
- Verify build commands
- Review deployment logs

### Debug Commands
```bash
# Check build locally
npm run build
npm run start

# Type checking
npm run type-check

# Linting
npm run lint

# Bundle analysis
npm run build && npx @next/bundle-analyzer
```

## 📈 Scaling

### CDN Configuration
- Vercel provides global CDN automatically
- Configure custom domains
- Set up redirects and rewrites

### Database Integration
For dynamic content:
- Add database (PostgreSQL, MongoDB)
- Configure ORM (Prisma, Mongoose)
- Set up API routes

### Authentication
For user features:
- NextAuth.js for authentication
- Role-based access control
- User management

## 🔄 CI/CD Pipeline

### GitHub Actions
The project includes workflows for:
- Code quality checks
- Automated testing
- Deployment to Vercel
- Performance monitoring

### Workflow Triggers
- Push to `main`: Production deployment
- Pull requests: Preview deployment
- Manual trigger: On-demand deployment

### Quality Gates
- ESLint passing
- TypeScript compilation
- Build success
- Performance thresholds 