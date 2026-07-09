# TypeScript Learning Workspace

This workspace is set up for learning TypeScript locally in a project-based way.

## Quick start

From your workspace folder, run:

```bash
npm init -y                          # creates package.json if you don't have one
npm install --save-dev typescript    # local install
npx tsc --init                       # generates tsconfig.json
```

This creates a local TypeScript setup inside the project instead of relying on a global install.

## Useful commands

```bash
npx tsc --version        # verify TypeScript is installed
npx tsc file.ts          # compile one file to JavaScript
npx tsc --watch          # recompile automatically on save
```

## Run TypeScript directly

If you want to execute TypeScript files quickly:

```bash
npx tsx first-app.ts
```

## Why use local TypeScript?

Using `npx tsc` keeps TypeScript pinned to this project. That is the same approach used in real codebases and helps avoid version mismatches.

## Helpful tip

Add this script to your package.json for easier builds:

```json
"scripts": {
  "build": "tsc"
}
```

Then run:

```bash
npm run build
```
