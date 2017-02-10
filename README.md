# react-webpack-boilerplate

> A SPA boilerplate with React, built with love.

## Features
 - **React 15.4.2**
 - **react-router 3.0.2** will be updated to v4 whenever the version is stable.
 - **JSX**
 - **ES6**
 - **webpack 2.2**
 - **Express** the dev-server.
 - **Hot-Reload**
 - **Proxy**
 - **Global-Variable**
 - **ESlint** with `standard` and `standard-react`

## Usage

```bash
# install sao first
npm install -g sao

# download the template
sao SidKwok/react-webpack-boilerplate new-project --install

# install all this dependencies.
npm install

# development, default port: 8080
npm run dev

# production
npm run build

# lint the files (if use eslint)
npm run lint
```

## Doc
It is pretty much the same config as [vue-cli/webpack](https://github.com/vuejs-templates/webpack/tree/master/docs). If you are familiar with `vue-cli`, you may have a great joy with this boilerplate.

### Pre-Processor
You can take `less`, `sass`, or `stylus` as your CSS pre-processors, after installing the dependencies. For example, to use `less`:
```bash
npm install less less-loader --save-dev
```
Then, you can `import` your `less` files in your components.

### Proxy
The boilerplate uses [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)  for proxying.
For example, you want to proxy `/api/get-post` and `/api/get-id`, you can edit the option in `config/index.js`:
```javascript
...
dev: {
    proxyTable: {
        'api': {
            target: 'http://example.org',
            changeOrigin: true
        }
    }
}
...
```
Then, you can proxy `/api` in your dev server.

### Env
This [doc](https://github.com/vuejs-templates/webpack/blob/master/docs/env.md) can illustrate the usage well.

### Hot-Reload
The boilerplate uses [react-hot-loader v3](https://github.com/gaearon/react-hot-loader/tree/next) to tweak React components.

### ESlint
[standard](https://github.com/feross/standard) and [standard-react](https://github.com/feross/standard-react) are the default style guides for this boilerplate, feel free to edit your own config in `.eslintrc.js`.

### Production
The production files are built for server, so you are not supposed to visit `index.html` directly. To make it works, you should use a static server:
```bash
npm install -g anywhere # or others

# in `./dist`
anywhere
```

## TODO
* [x] eslint
* [ ] unit test
* [ ] e2e test
* [ ] **Redux** comming soon!
