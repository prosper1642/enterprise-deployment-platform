# Deployment Engineering Insights

## What I Built
An enterprise e-commerce platform deployed with production-grade CI/CD,
security headers for PCI compliance, and real-time performance monitoring.

## Key Learnings

### Environment Management
Separating .env.local (development) from .env.production taught me
why secrets must never be committed to version control. Each environment
needs its own configuration to prevent data leaks.

### CI/CD Pipeline
Building the GitHub Actions workflow showed me how automated pipelines
catch problems before they reach real users. Running lint, security scan,
build, and deploy in sequence means only clean tested code ships.

### Security Headers (PCI Compliance)
E-commerce platforms must protect payment data. I implemented:
- HSTS: Forces HTTPS connections, prevents downgrade attacks
- CSP: Blocks unauthorized scripts (critical for payment security)
- X-Frame-Options: Prevents clickjacking on checkout pages

### Performance Monitoring
Vercel Analytics and Speed Insights track Core Web Vitals automatically.
This means I can see if a new feature slows down the page before users complain.

## Challenges I Faced
- Learning the difference between build-time and runtime environment variables
- Understanding why NEXT_PUBLIC_ prefix is required for client-side variables
- Configuring GitHub Secrets correctly for the Vercel deployment step

## What I'd Do Differently
- Add a real database for actual product data
- Implement a real cart with localStorage or a state manager
- Add Stripe for actual payment processing with PCI compliance
