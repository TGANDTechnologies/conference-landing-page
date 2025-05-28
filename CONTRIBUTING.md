# Contributing to Medical Conference Landing Page

Thank you for your interest in contributing to this project! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Issues
- Use the [GitHub Issues](https://github.com/Eslamsamyx/conference-landing-page/issues) page
- Search existing issues before creating a new one
- Provide detailed information about the bug or feature request
- Include steps to reproduce for bugs

### Pull Requests
1. Fork the repository
2. Create a feature branch from `main`
3. Make your changes
4. Test your changes thoroughly
5. Submit a pull request

## 🛠️ Development Setup

### Prerequisites
- Node.js 18 or higher
- npm, yarn, or pnpm
- Git

### Local Development
```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/conference-landing-page.git
cd conference-landing-page

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📋 Code Standards

### TypeScript
- Use TypeScript for all new code
- Maintain strict type checking
- Export types when they might be reused

### React Components
- Use functional components with hooks
- Follow React best practices
- Use proper prop types

### Styling
- Use Tailwind CSS utility classes
- Follow responsive design principles
- Maintain consistent spacing and colors

### Code Quality
- Run ESLint before committing: `npm run lint`
- Run type checking: `npm run type-check`
- Follow existing code patterns

## 🎯 Areas for Contribution

### High Priority
- Performance optimizations
- Accessibility improvements
- Mobile responsiveness enhancements
- SEO optimizations

### Medium Priority
- Additional animation effects
- New component variants
- Documentation improvements
- Test coverage

### Low Priority
- Code refactoring
- Developer experience improvements
- Build optimizations

## 📝 Commit Guidelines

### Commit Message Format
```
type(scope): description

[optional body]

[optional footer]
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Test additions or changes
- `chore`: Build process or auxiliary tool changes

### Examples
```
feat(components): add speaker bio modal
fix(registration): resolve form validation issue
docs(readme): update installation instructions
```

## 🧪 Testing

### Before Submitting
- [ ] Code builds successfully (`npm run build`)
- [ ] No TypeScript errors (`npm run type-check`)
- [ ] No ESLint errors (`npm run lint`)
- [ ] Application runs correctly (`npm run dev`)
- [ ] Changes work on mobile devices
- [ ] Accessibility standards maintained

### Manual Testing
- Test on different screen sizes
- Verify animations work smoothly
- Check form functionality
- Validate responsive design

## 📚 Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

### Design Guidelines
- Follow medical/healthcare design principles
- Maintain professional appearance
- Ensure accessibility compliance
- Use consistent color scheme

## 🎨 Design Contributions

### UI/UX Improvements
- Maintain the medical conference theme
- Ensure accessibility standards
- Follow responsive design principles
- Consider user experience flow

### Asset Guidelines
- Use high-quality images
- Optimize for web performance
- Maintain consistent style
- Provide appropriate alt text

## 🚀 Deployment

### Vercel Integration
- Automatic deployments on merge to `main`
- Preview deployments for pull requests
- Environment variables managed in Vercel dashboard

### Testing Deployments
- Preview URLs provided for each PR
- Test thoroughly before merging
- Verify production build works correctly

## 📞 Getting Help

### Communication Channels
- GitHub Issues for bugs and features
- GitHub Discussions for questions
- Pull Request comments for code review

### Response Times
- Issues: Within 48 hours
- Pull Requests: Within 72 hours
- Questions: Within 24 hours

## 🏆 Recognition

Contributors will be:
- Listed in the project README
- Mentioned in release notes
- Credited in commit messages

Thank you for contributing to making this project better! 🎉 