# Changelog

## Unreleased

## 0.4.2 — 2026-11-19.

- Replaced dynamic exports with explicit exports.
- Added basic TypeScript type definitions for functions.

## 0.4.1 — 2026-11-18.

- Moved ESLint and Jest configurations from `package.json` to separate files.
- Excluded test and development files from the npm package.

## 0.4.0 — 2026-11-10.

- Added `isNotEmptyArray` and its alias `isNotEmptyArr`.
- Added `isUUID` for UUID versions 1–8, excluding Nil and Max UUIDs.
- Node.js 10, 12, and 14 are no longer tested; compatibility is not guaranteed.
- CI tests Node.js 16, 18, 20, 22, 24, and 26.
- Updated GitHub Actions to v6 and switched CI dependency installation to `npm ci`.
- Updated ESLint to v8, Airbnb's base configuration to v15, and eslint-plugin-import to v2.32.
- Updated Jest to v29.7.0.
