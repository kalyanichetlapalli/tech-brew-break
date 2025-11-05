# CodeBrew Test Suite

Comprehensive testing suite for the CodeBrew application covering unit tests, integration tests, and end-to-end tests.

## Test Coverage

### Unit Tests (Vitest + React Testing Library)
- **Component Tests**: Navigation, Footer, UI components
- **Page Tests**: Home, Puzzles, Games, Brainstorm, Learn, About, Contact
- **Edge Cases**: Empty states, loading states, error handling
- **Boundary Tests**: Form validation, input limits, special characters

### Integration Tests
- **Puzzles Module**: Difficulty filtering, category display, challenge selection
- **Games Module**: Game cards, leaderboard, player counts
- **Brainstorm Module**: Challenge display, hints functionality
- **Learn Module**: Category filtering, video display, tab navigation
- **Contact Module**: Form submission, validation, success handling

### E2E Tests (Playwright)
- **Navigation**: All page transitions, browser history, 404 handling
- **Contact Form**: Validation, submission, special characters, long messages
- **User Flows**: Complete user journeys, rapid navigation, state persistence
- **Accessibility**: Keyboard navigation, screen reader support, ARIA landmarks
- **Performance**: Load times, layout shifts, caching, rapid interactions
- **Cross-browser**: Chrome, Firefox, Safari, Mobile Chrome
- **Responsive**: Mobile (375px), Tablet (768px), Desktop (1920px)

## Running Tests Locally

### Install Dependencies
```bash
npm install
```

### Unit & Integration Tests (Vitest)

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with UI
npm run test:ui

# Generate coverage report
npm run test:coverage
```

### E2E Tests (Playwright)

```bash
# Install Playwright browsers (first time only)
npx playwright install

# Run all E2E tests
npm run test:e2e

# Run E2E tests in headed mode (see browser)
npm run test:e2e:headed

# Run E2E tests in UI mode (interactive)
npm run test:e2e:ui

# Run specific test file
npx playwright test tests/e2e/contact-form.spec.ts

# Run tests on specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run All Tests
```bash
# Run both unit and E2E tests
npm run test:all
```

## CI/CD Configuration

### GitHub Actions

Add this to `.github/workflows/test.yml`:

```yaml
name: Run Tests

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run unit tests
        run: npm run test:coverage
      
      - name: Install Playwright browsers
        run: npx playwright install --with-deps
      
      - name: Run E2E tests
        run: npm run test:e2e
      
      - name: Upload test results
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: test-results
          path: |
            coverage/
            playwright-report/
            test-results/
      
      - name: Upload coverage to Codecov
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/coverage-final.json
```

### GitLab CI

Add this to `.gitlab-ci.yml`:

```yaml
stages:
  - test

test:
  stage: test
  image: mcr.microsoft.com/playwright:v1.40.0-focal
  before_script:
    - npm ci
  script:
    - npm run test:coverage
    - npm run test:e2e
  artifacts:
    when: always
    paths:
      - coverage/
      - playwright-report/
      - test-results/
    reports:
      coverage_report:
        coverage_format: cobertura
        path: coverage/cobertura-coverage.xml
```

## Test Scripts Reference

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "test": "vitest",
    "test:watch": "vitest --watch",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage",
    "test:e2e": "playwright test",
    "test:e2e:headed": "playwright test --headed",
    "test:e2e:ui": "playwright test --ui",
    "test:e2e:debug": "playwright test --debug",
    "test:all": "npm run test:coverage && npm run test:e2e"
  }
}
```

## Test Structure

```
project/
├── src/
│   └── test/
│       ├── setup.ts                 # Vitest setup
│       ├── mocks/
│       │   ├── handlers.ts          # MSW handlers
│       │   └── server.ts            # MSW server
│       ├── utils/
│       │   └── test-utils.tsx       # Test utilities
│       ├── components/              # Component tests
│       │   ├── Navigation.test.tsx
│       │   └── Footer.test.tsx
│       ├── pages/                   # Page tests
│       │   ├── Home.test.tsx
│       │   ├── Contact.test.tsx
│       │   └── About.test.tsx
│       └── integration/             # Integration tests
│           ├── puzzles.test.tsx
│           ├── games.test.tsx
│           ├── brainstorm.test.tsx
│           └── learn.test.tsx
├── tests/
│   └── e2e/                         # E2E tests
│       ├── navigation.spec.ts
│       ├── contact-form.spec.ts
│       ├── user-flow.spec.ts
│       ├── accessibility.spec.ts
│       └── performance.spec.ts
├── vitest.config.ts                 # Vitest configuration
└── playwright.config.ts             # Playwright configuration
```

## Coverage Goals

- **Unit Tests**: 80%+ coverage
- **Integration Tests**: All critical paths
- **E2E Tests**: All user flows
- **Accessibility**: WCAG 2.1 Level AA

## Best Practices

1. **Write tests first** for new features (TDD)
2. **Mock external dependencies** (API calls, Supabase)
3. **Test user behavior**, not implementation
4. **Keep tests isolated** and independent
5. **Use semantic queries** (getByRole, getByLabelText)
6. **Test accessibility** in every test
7. **Handle async operations** properly
8. **Clean up after tests** (cleanup, resetHandlers)

## Debugging Tests

### Vitest
```bash
# Run specific test file
npm run test src/test/pages/Contact.test.tsx

# Run tests matching pattern
npm run test -- --grep="contact form"

# Debug in VS Code
# Add breakpoint and use "Debug Test" in test file
```

### Playwright
```bash
# Debug mode with inspector
npm run test:e2e:debug

# Run with trace viewer
npx playwright test --trace on
npx playwright show-report

# Take screenshots on failure
# Already configured in playwright.config.ts
```

## Common Issues

### Port Already in Use
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
```

### Playwright Browsers Not Installed
```bash
npx playwright install --with-deps
```

### Tests Timing Out
- Increase timeout in test file: `test.setTimeout(30000)`
- Check network connectivity
- Ensure dev server is running

## Contributing

When adding new features:
1. Write unit tests for components
2. Write integration tests for modules
3. Add E2E tests for user flows
4. Update this README if needed
5. Ensure all tests pass before PR

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [Playwright Documentation](https://playwright.dev/)
- [MSW Documentation](https://mswjs.io/)
