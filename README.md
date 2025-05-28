# NTU AHA Personal Website

This is my personal website built with Vue 3 and Vite.

## Development Workflow

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Initial Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ntuaha.github.io.git
   cd ntuaha.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Troubleshooting

If you encounter dependency issues (like Rollup errors), try these steps:

1. Clear npm cache and node_modules:
   ```bash
   rm -rf node_modules
   rm package-lock.json
   npm cache clean --force
   ```

2. Reinstall dependencies:
   ```bash
   npm install
   ```

### Branch Management

- `main`: Production branch, contains the latest stable code
- `develop`: Development branch, contains the latest development code
- Feature branches: Create new branches from `develop` for new features
  ```bash
  git checkout develop
  git pull origin develop
  git checkout -b feature/your-feature-name
  ```

### Local Development

1. Start development server:
   ```bash
   npm run dev
   ```
   This will start the Vite development server at `http://localhost:5173`

2. Build for production:
   ```bash
   npm run build
   ```

### Testing

1. Run unit tests:
   ```bash
   npm run test
   ```

2. Run end-to-end tests:
   ```bash
   npm run test:e2e
   ```

### Deployment

The website is automatically deployed to GitHub Pages through GitHub Actions when changes are pushed to the `main` branch.

To manually deploy:
```bash
npm run deploy
```

### GitHub Actions

The repository uses GitHub Actions for:
- Automated testing on pull requests
- Automatic deployment to GitHub Pages when changes are pushed to `main`
- Code quality checks

Workflow files are located in `.github/workflows/`:
- `deploy.yml`: Handles deployment to GitHub Pages
- `test.yml`: Runs tests on pull requests

### Project Structure

```
├── src/              # Source files
├── public/           # Static assets
├── tests/            # Test files
├── .github/          # GitHub configuration
│   └── workflows/    # GitHub Actions workflows
└── vite.config.js    # Vite configuration
```

## Contributing

1. Create a new branch from `develop`
2. Make your changes
3. Run tests locally
4. Create a pull request to `develop`
5. After review and approval, changes will be merged to `develop`
6. Changes will be deployed to production when merged to `main`

## License

MIT

```bash
npm run deploy
```
