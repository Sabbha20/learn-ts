Right — for learning TypeScript in a single workspace, install it locally in that folder. From `~/Desktop/typescript_react/learn`:

```bash
npm init -y                          # creates package.json if you don't have one
npm install --save-dev typescript    # local install
npx tsc --init                       # generates tsconfig.json
```

Then use it via `npx`:

```bash
npx tsc --version        # verify
npx tsc file.ts          # compile a file → file.js
npx tsc --watch          # auto-recompile on save
```

The key difference: `npx tsc` (local) instead of `tsc` (global). This keeps TypeScript pinned per-project, which is exactly how real codebases do it. For quick practice, add a `"build": "tsc"` script to package.json so you can just run `npm run build`.