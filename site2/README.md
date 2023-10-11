# 📦 11st-Starter-Kit

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Netlify Status](https://api.netlify.com/api/v1/badges/ec6da587-72ba-490a-ad4b-167802a9c197/deploy-status)](https://app.netlify.com/sites/11st-starter-kit/deploys)

[11ty](https://www.11ty.dev/), powered by [Vite](https://vitejs.dev/)
with [Tailwind CSS](https://tailwindcss.com) and
[Alpine.js](https://github.com/alpinejs/alpine/).

## Install Dependencies

First, make sure you have `npm` (packaged with
[Node.js](https://nodejs.org)) installed, then run `npm run setup` to install
the dependencies and validate that everything is running correctly.

## Available Scripts

### Development

```bash
# runs the app in the development mode.
npm run dev
```

Open http://localhost:3000/ to view it in your browser.

The page will reload if you make file changes.

### Production

```bash
# builds a static copy of your site to the `dist/` folder.
npm run build
```

```bash
# serve the content from the `dist/` folder.
npm run preview
```

Open http://localhost:5000/ to view it in your browser.

Your code is now ready to be deployed!

## Netlify

To get your own instance of this 11st-Starter-Kit cloned and deploying to
Netlify very quickly, just click the button below and follow the instructions.

[<img src="https://www.netlify.com/img/deploy/button.svg" />](https://app.netlify.com/start/deploy?repository=https://github.com/stefanfrede/11st-starter-kit)

### Add some Netlify helpers

Netlify Dev adds the ability to use Netlify redirects, proxies, and serverless functions.

```bash
# install the Netlify CLI in order to get netlify dev
npm install -g netlify-cli

# run a local server with some added Netlify sugar
netlify dev
```

## Code Quality

By default `CSS` and `JavaScript` is getting linted with every commit.

You can lint manually by running `npm run lint` and if errors occur you can try to fix them automatically by running `npm run format`.

With every pull request it is checked if the code can be build without errors and afterwards `CSS` and `JavaScript` is getting linted.

Additionally each page is audited by Lighthouse which can take some time. You can find the performance budget for this audit in the file `./budget.json`.

## License

This project is open source and available under the [MIT License](LICENSE).
