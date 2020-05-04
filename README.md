# react

#### 介绍

webpack4 最新的脚手架的搭建和最简单的 todolist

#### 软件架构

安装 react + webpack4 + scss + to do list + router

#### 安装教程

1.  npm install
2.  npm install -S react-router 旧版本中引入 react-router 的方式先安装
3.  npm install -S react-router-dom 现在需要安装 react-router-dom 包：
4.  npm run dev

#### 关于 webpack4 scss 版本的要求

```js
test: /\.scss/, // 把scss转为webpack可识别的模块
// 注意这里的"sass-loader": "^8.0.2",版本过高会有 this.getResolve is not a function
// 需要降低版本7.3.1
```
