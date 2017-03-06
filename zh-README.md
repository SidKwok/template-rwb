# react-webpack-boilerplate

> A SPA boilerplate with React, built with love.

<div align="center"><img width="400" src="screenshots.png" /></div>

## Features
 - **React 15.4.2**
 - **Redux 3.6.0**
 - **react-redux 5.0.2**, 用来绑定 React 和 Redux.
 - **react-router 3.0.2**, 当v4发布稳定版本时, 会进行相关的更新
 - **JSX**
 - **ES6**
 - **webpack 2.2**
 - **Express**, 测试服务器
 - **Hot-Reload**, 支持 React 和 Redux!
 - **Proxy**
 - **Environmental value**
 - **ESlint**, 使用 [`standard`](https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style) 和 [`standard-react`](https://github.com/feross/eslint-config-standard-react) 进行代码风格检查
 - **redux-devtools**, 对 `store` 进行更加友好的调试

## Usage

```bash
# 该模版依赖于 sao 模版系统，所以请先sao
npm install -g sao

# 下载模版
sao SidKwok/react-webpack-boilerplate new-project --install

# 安装全部依赖
cd new-project
npm install

# 运行测试环境, 默认端口: 8080
npm run dev

# 生产环境
npm run build

# 检查文件代码风格 (如果有使用 eslint 的话)
npm run lint
```

## Doc

该模版大部分参考了 [vue-cli/webpack](https://github.com/vuejs-templates/webpack/tree/master/docs) 的设计。 如果你对 `vue-cli` 很熟悉的话, 你应该会对该模版很快上手。如果想看模版的结构，可以直接在[`full-features`分支](https://github.com/SidKwok/react-webpack-boilerplate/tree/full-features)查看。

### Pre-Processor

你可以使用 `less`, `sass` 或者 `stylus` 作为你的CSS预处理器，不过你首先得安装相关的依赖。举个🌰，假如你要使用 `less`：
```bash
npm install less less-loader --save-dev
```
然后，你就可以在你的组件里 `import` 你的 `less` 文件。

### Proxy

该模版使用 [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)  来代理接口.
举个🌰, 你想代理接口 `/api/get-post` 和 `/api/get-id` 到, 你可以在 `config/index.js` 中添加以下代码:
```javascript
...
dev: {
    proxyTable: {
        '/api': {
            target: 'http://example.org',
            changeOrigin: true
        }
    }
}
...
```
你便可以在测试服务器中使用你所代理的接口。在[这里](https://github.com/chimurai/http-proxy-middleware#options)查看更多的选项。

### Env

[`vue-cli/webpack` 的文档](https://github.com/vuejs-templates/webpack/blob/master/docs/env.md)详细地介绍了环境变量地用法。

### Hot-Reload

该模版使用了[react-hot-loader v3](https://github.com/gaearon/react-hot-loader/tree/next)来对React的组件进行热更新，甚至支持Redux的热更新！希望你玩的开心。

### ESlint

[standard](https://github.com/feross/standard) 和 [standard-react](https://github.com/feross/standard-react) 是该模版默认的代码风格，你也可以在 `.eslintrc.js` 中使用自己喜爱的代码风格。

### react-devtools

该模版已经默认开启了浏览器的`redux-devtool`，但是如果要让其工作起来，你需要下载[相关的浏览器插件](https://github.com/zalmoxisus/redux-devtools-extension)。

你也可以选择 `Customized DevTools`， 这个是建立在页面里面的一个组件，你可以在代码里自定义你需要的devtool。在[这里](https://github.com/gaearon/redux-devtools)查看更多的选项。

### Production

生产环境的文件(也就是dist里的文件)是适用于真实的server的，所以你不应该直接访问`index.html`。如果要对dist内的文件进行测试，你可以使用静态服务器：
```bash
npm install -g anywhere # 或者其他静态服务器

# 在 `./dist` 文件夹里
anywhere
```

## TODO
* [x] eslint
* [ ] unit test
* [ ] e2e test
* [x] **Redux** comming soon!
* [x] hot-reload for redux
* [ ] better structure for redux
* [x] support redux-devtools-extension
* [ ] 使用happypack让构建更快
* [x] DevTools的选择：使用浏览器的还是自定义的

## Known Issues

* 当有使用`react-router`的时候，热更新会导致浏览器的`console`报告错误信息，这是`react-router v3`的已知[issue](https://github.com/ReactTraining/react-router/issues/2704)，但是并不影响使用。我使用了随机数暂时解决了这个报错的问题，谢谢[@chenz24](https://github.com/chenz24)提供的解决方案。v4似乎不存在这个问题。
* ~~当有使用`Redux`的时候，热更新会导致浏览器报错`<Provider> does not support changing `store` on the fly...`，而且会导致redux热更新无效。~~
