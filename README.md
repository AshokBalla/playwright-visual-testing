# playwright-video-tests

Debug-first Playwright repository that captures videos, traces, screenshots, and network metadata for flaky scenarios.

## Highlights

- Playwright trace viewer ready
- Failure-only video retention
- Slow motion presets
- Network diagnostics helpers

## Getting Started

```bash
npm install
npm test
npm run test:video
```

## Project Structure

- `tests/`
- `videos/`
- `traces/`
- `screenshots/`
- `utils/`
- `reports/`

## Reporting

- HTML, JSON, and screenshot/video friendly output paths are pre-created.
- CI examples publish artifacts and preserve failure diagnostics.

## Contribution Guide

1. Create a branch from `develop`.
2. Keep helpers reusable and environment-driven.
3. Add or update validation tests with every framework change.
4. Document any new test data, report artifacts, and CI behavior.

## Notes

- - 2023: created focused repository split for Debug-first Playwright project focused on video, traces, and flaky test analysis.

## Career Evolution & Historical Tests
The `original-tests` directory contains historical test suites and experiments from earlier stages of this project's lifecycle (2023-2025). This folder is preserved to demonstrate the evolution from initial test scripts to the modern, scalable framework architecture seen in the current `tests/` and `src/` directories.
