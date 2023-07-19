<p align="center">
  <img alt="vite-plugin-ls-lint logo" src="https://imgur.com/DjMjcR8.png" width="100" height="100">
</p>

<h1 align="center">vite-plugin-ls-lint</h1>
<p align="center">
  <a href="https://vitejs.dev/">
    Vite
    <img alt="npm" src="https://vitejs.dev/logo.svg" width="15" height="15" />
  </a>
  plugin to use the directory and filename linter
  <a href="https://github.com/loeffel-io/ls-lint">
    ls-lint
    <img alt="npm" src="https://raw.githubusercontent.com/loeffel-io/ls-lint/master/assets/logo/ls-lint.png" width="15" height="15" />
  </a>
.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vite-plugin-ls-lint">
    <img alt="npm" src="https://img.shields.io/npm/v/vite-plugin-ls-lint?color=%23c12127&label=version&logo=npm" />
  </a>
  <a href="https://github.com/AlonsoGalicia/vite-plugin-ls-lint/LICENSE">
    <img alt="License" src="https://img.shields.io/github/license/AlonsoGalicia/vite-plugin-ls-lint?color=%233da639&logo=open%20source%20initiative" />
  </a>
</p>

###### Project structure
```html
├── src
├── node_modules
└── .gitignore
└── ...
├── .ls-lint.yml
├── ...
├── package.json
├── package-lock.json
└── vite.config.js/ts
```
<br>
<br>

## 🚀 Quickstart

1. Install with your favorite package manager:
   - **pnpm** : `pnpm i vite-plugin-ls-lint --save-dev`
   - **npm** : `npm i vite-plugin-ls-lint --save-dev`
 <br>
  <div style="background-color: #f4f0ec; margin-left:4rem; padding:10px;">
      <b>Note:</b>
      <br>
      You also need to install <b>ls-lint >= 2</b>, if you haven't already:
      
      npm i @ls-lint/ls-lint --save-dev
  </div>
  <div style="background-color: #f4f0ec; margin-left:4rem; padding:10px;">
      🤙🏼Or install both with:
      
      npm i @ls-lint/ls-lint vite-plugin-ls-lint --save-dev
  </div>
 <br>
 
2. Add the plugin into _**vite.config.js/ts**_:
```js
import { defineConfig } from 'vite'
// other imports
import lsLintPlugin from 'vite-plugin-ls-lint'

export default defineConfig({
  plugins: [
    // ... other plugins
    lsLintPlugin()
  ],
})
```
<br>

3. Add your _**ls-lint.yml**_ configuration file, example:

```yml
ls:
  .js: snake_case
  .ts: snake_case | camelCase
  .d.ts: PascalCase
  .html: regex:[a-z0-9]+

ignore:
  - node_modules
```

## 📝 License

Copyright © 2023 [Alonso Galicia](https://github.com/AlonsoGalicia).  
This project is under [MIT](https://github.com/AlonsoGalicia/vite-plugin-ls-lint/blob/main/LICENSE) license.