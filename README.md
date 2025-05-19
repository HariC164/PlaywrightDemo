# Playwright Test Demo

This project contains automated tests using Playwright Test.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

- Run all tests:
```bash
npx playwright test
```

- Run tests in UI mode:
```bash
npx playwright test --ui
```

- Run tests in a specific browser:
```bash
npx playwright test --project=chromium
```

- Run tests with debug mode:
```bash
npx playwright test --debug
```

## Project Structure

- `tests/` - Test files
- `playwright.config.ts` - Playwright configuration
- `test-results/` - Test results and reports (generated when tests run)

## Documentation

For more information, visit [Playwright Documentation](https://playwright.dev/docs/intro)
