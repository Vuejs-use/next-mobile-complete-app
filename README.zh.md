# next-mobile-complete-demo &middot; [![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)

一个基于 [next](https://nextjs.org), [redux](https://github.com/reduxjs/redux), [redux-saga](https://github.com/redux-saga/redux-saga), [koa](https://github.com/koajs/koa), sass, postcss, [ant-design-mobile](https://github.com/ant-design/ant-design-mobile) 的  移动端 SSR 项目模板.

## 快速开始

```shell
npm install
npm run dev
```

打开浏览器访问`http://localhost:3002`。

![截图示例](http://doudou-static.oss-cn-shanghai.aliyuncs.com/%E5%B8%83%E5%B1%80.png)

##  项目结构

```
--------------------------------------------------------------------|
src
|-+api
|   |--proxyFetch.js          // Fetch封装
|   |
|-+components
|   +--common
|   |   |...
|   +--layout
|   |   |...
|   +--tabs
|   |   |--TabCourse.js
|   |   |--TabIcon.js
|   |   |--TabTrick.js
|   |
|--env-config                  // 项目环境变量
|   |
|-+pages
|   |...
|   |   |
|-+server
|   |
+--static
|   |...
+--utils
+--stores
|   |
|-+styles
|   |--base.scss
--------------------------------------------------------------------|
```

## 配置

`env-config.js`

```js
const isProd = process.env.NODE_ENV === 'production';

process.env.BACKEND_URL = isProd ? '/' : 'https://jsonplaceholder.typicode.com';
process.env.BACKEND_URL_SERVER_SIDE = isProd ? 'http://bff.api.com' : 'https://jsonplaceholder.typicode.com';

module.exports = {
  'process.env.BACKEND_URL': process.env.BACKEND_URL,
  'process.env.BACKEND_URL_SERVER_SIDE': process.env.BACKEND_URL_SERVER_SIDE
};
```

##  代码风格

使用 Eslint 和 Prettier。 配置文件在 `.eslintrc.js` 和 `.prettierrc`，可以按照自己的需求自定义.

## 技巧

- 同时有多个不相关的请求时使用 `Promise.all()` 。 _e.g.:_

```js
static async getInitialProps({ ctx }) {
const { store, isServer , cookies} = ctx;
const [res_1, res_2] = await Promise.all([proxyFetch.get('https://jsonplaceholder.typicode.com/users', {}, { isServer, cookies }), proxyFetch.get('https://jsonplaceholder.typicode.com/users', {}, { isServer, cookies })])
return { res_1, res_2 };
}
```

- 模块化导入 `lodash` 的方法。多用`isEmpty`、`get`等方法做  判空和取值 ，避免请求失败而引起代码报错。

## Documents

- [Next 轻量级框架与主流工具的整合](https://segmentfault.com/a/1190000016383263)
- [移动端优雅布局实践](https://segmentfault.com/a/1190000017913569)