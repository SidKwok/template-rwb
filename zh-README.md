# react-webpack-boilerplate

![React](https://img.shields.io/badge/react-%5E15.6.1-brightgreen.svg)
![Redux](https://img.shields.io/badge/redux-%5E3.7.0-brightgreen.svg)
![webpack](https://img.shields.io/badge/webpack-%5E3.x.x-brightgreen.svg)
![MIT](https://img.shields.io/dub/l/vibe-d.svg?style=flat-square)

> A SPA boilerplate with React, built with love.

<div align="center"><img width="400" src="screenshots.png" /></div>

## Features
 - **React 15.6.1**
 - **Redux 3.7.0**
 - **react-redux 5.0.3**, 用来绑定 React 和 Redux.
 - **react-router v4 或者 v3**, 而且都支持异步路由
 - **JSX**
 - **ES6**，默认支持[`stage-1`](http://babeljs.io/docs/plugins/preset-stage-1/)草案
 - **webpack 3.x**
 - **Express**, 测试服务器
 - **Hot-Reload**, 支持 React 和 Redux!
 - **Proxy**
 - **Environmental value**
 - **ESlint**, 使用 [`standard`](https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style) 和 [`standard-react`](https://github.com/feross/eslint-config-standard-react) 进行代码风格检查
 - **redux-devtools**, 对 `store` 进行更加友好的调试
 - **bundle-analyzer**
 - **jest** 配合Enzyme，让React组件更加容易测试。

## Usage

```bash
# 该模版依赖于 sao 模版系统，所以请先sao
npm install -g sao

# 安装全局命令
1. 下载脚本，放置到某个目录，比如D:\react-cli-bash
2. 添加环境变量path

![image](https://user-images.githubusercontent.com/8369212/28167180-4c0f23f0-680d-11e7-8757-2ce6b97af59e.png)

3. 命令行运行
```
react-cli 项目名
```

# 下载模版
sao SidKwok/react-webpack-boilerplate new-project --install

# 安装全部依赖
cd new-project
npm install

# 运行测试环境, 默认端口: 8080
npm run dev

# 生产环境
npm run build

# 查看report
npm run build --report

# 检查文件代码风格 (如果有使用 eslint 的话)
npm run lint

# 运行测试
npm test
```

## Doc

该模版大部分参考了 [vue-cli/webpack](https://github.com/vuejs-templates/webpack/tree/master/docs) 的设计。 如果你对 `vue-cli` 很熟悉的话, 你应该会对该模版很快上手。如果想看模版的结构，可以直接在[`full-features`分支](https://github.com/SidKwok/react-webpack-boilerplate/tree/full-features)查看。

### Pre-Processor

你可以使用 `less`, `sass` 或者 `stylus` 作为你的CSS预处理器，不过你首先得安装相关的依赖。举个🌰，假如你要使用 `less`：
```bash
npm install less less-loader --save-dev
```
然后，你就可以在你的组件里 `import` 你的 `less` 文件。

### postcss-config

我们默认使用[postcss](http://postcss.org/)，所以你可以用你需要的插件来丰富postcss。举个🌰，你要使用`postcss-color-gray`：
```bash
# First thing to do
npm install postcss-color-gray --save-dev
```

在`postcssrc.js`添加你的插件：
```javascript
module.exports = {
  "plugins": {
    // to edit target browsers: use "browserlist" field in package.json
    "autoprefixer": {},
    // put your plugin here
    "postcss-color-gray": {}
  }
}
```

Tada! Everything is gray now.

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

### Router

可以选择v3或者是v4作为你的路由，而且两个都支持异步路由。对于v4来说，由于其理念的问题，使用异步路由是有点麻烦的，所以在这里使用了 [`react-loadable`](https://github.com/thejameskyle/react-loadable) 对路由进行拆分。这是一个十分优秀的异步拆分高阶组件，它对react的拆分程度不仅仅在于路由，甚至可以细粒度到每一个组件。至于怎么使用比较舒服大家见仁见智啦。

### Redux

你可以通过命令行开启`redux`选项来在项目中使用 **Redux** 。为了减少生产环境的代码体积，我们把两种不同环境的`store`(`dev` 和 `prod`)分离到了两个文件中。如果你需要使用**Redux**的中间件(`redux-thunk`, `redux-saga`...)，你只需要在`middlewares.js`中添加相应的中间件。

### redux-devtools

该模版已经默认开启了浏览器的`redux-devtool`，但是如果要让其工作起来，你需要下载[相关的浏览器插件](https://github.com/zalmoxisus/redux-devtools-extension)。

你也可以选择 `Customized DevTools`， 这个是建立在页面里面的一个组件，你可以在代码里自定义你需要的devtool。在[这里](https://github.com/gaearon/redux-devtools)查看更多的选项。

### Production

生产环境的文件(也就是dist里的文件)是适用于真实的server的，所以你不应该直接访问`index.html`。如果要对dist内的文件进行测试，你可以使用静态服务器：
```bash
npm install -g serve # 或者其他静态服务器

# 在 `./dist` 文件夹里
serve

# 若使用了react-router
serve -s
```

### bundle-analyzer

我们使用  [webpack-bundle-analyzer](https://github.com/th0r/webpack-bundle-analyzer) 来分析 bundle 的内容:

![bundle-analyzer](/bundle_report.png)

为了打印出分析结果，你需要使用以下命令：

```bash
npm run build --report
```

### Source Map

通过sourceMap来获取更好的开发体验，但是我们在生产环境中默认关闭了sourceMap功能，因为基于安全问题用户有时候不应该直接在浏览器中获取你源代码的映射，同时也可以加快你的代码构建速度。但是你也可以在`config/index.js: productionSourceMap`中将其打开。

### Unit test with jest

我们使用[jest](http://facebook.github.io/jest/)作为默认的单元测试工具，它强大而简单的api使整个单元测试更加简单。为了简化组件的操作，我们还引入了[Enzyme](http://airbnb.io/enzyme/index.html)来作为工具让组件具有更多测试的接口。所有的测试文件都应该放在`./test/unit/__tests__`里头，而且测试文件应该遵循`your-js(x)-file.test.js`，否则不会被检测到。或者你可以在`package.json`里面设置你自己的检测规则。

## Known Issues

* 当有使用`react-router`的时候，热更新会导致浏览器的`console`报告错误信息，这是`react-router v3`的已知[issue](https://github.com/ReactTraining/react-router/issues/2704)，但是并不影响使用。我使用了随机数暂时解决了这个报错的问题，谢谢[@chenz24](https://github.com/chenz24)提供的解决方案。`v4`不存在这个问题。

* ~~当有使用`Redux`的时候，热更新会导致浏览器报错`<Provider> does not support changing `store` on the fly...`，而且会导致redux热更新无效。~~

* ~~由于配置和`eslint-plugin-react@6.10.2`的bug的原因，eslint暂时无法使用。~~

## Reference

* [vue-cli/webpack](https://github.com/vuejs-templates/webpack)
