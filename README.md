# vue-manage-board

## 环境安装

### 基础环境安装

我们这里使用 `vue-cli` 命令行工具安装基本的开发环境框架。项目基本环境从无到有初始化步骤如下：

```Shell
    # 全局安装 vue-cli 命令行工具，利用这个工具我们可以初始化基于 vue 和不同工具组合的基础开发环境框架
    $ npm install --global vue-cli

    # 创建一个基于 webpack 模板的新项目
    $ vue init webpack my-project

    # 安装开发环境三方依赖包
    $ cd my-project

    $ npm install

    # 启动本地开发环境，这里包含一个本地服务和 hot reload
    $ npm run dev
```

### 开发者环境搭建

作为开发者如果想基于本项目深度开发，可以 `git clone https://github.com/littleLane/vue-manage-board.git` 先克隆本项目代码，继续如下

```Shell
    # 安装开发环境三方依赖包
    $ cd vue-manage-board

    $ npm install

    # 启动本地开发环境，这里包含一个本地服务和 hot reload
    $ npm run dev 或者 npm run start
```

## 开发工具配置

### ElementUI

因为本项目 `UI` 框架是基于 `ElementUI` ，所以我们首先就要引入 `ElementUI`

```Shell
    # 安装 element-ui 项目包文件
    npm i element-ui -S
```

然后在 `main.js` 里修改如下代码

```javascript
import Vue from 'vue'
+ import ElementUI from 'element-ui'
+ import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

Vue.config.productionTip = false

+ Vue.use(ElementUI);
```

作为一个比较完善和追求性能的项目，优化是必不可少的。这里我们首先要对我们引入的 `ElementUI` 的使用进行按需加载

```shell
    npm install babel-plugin-component -D
```

然后，将 .babelrc 修改为：

```javascript
    {
        "presets": [["es2015", { "modules": false }]],
        "plugins": [
            [
                "component",
                {
                    "libraryName": "element-ui",
                    "styleLibraryName": "theme-chalk"
                }
            ]
        ]
    }
```

### TypeScript

`TypeScript` 是 `JavaScript` 的强类型版本。在编译期去掉类型和特有语法，生成纯粹的 `JavaScript` 代码。随着 `vue2.5` 更好的 `TypeScript` 集成，同时因为新开项目的契机，故准备动手尝试一下 `typescript + vue`。

```Shell
    # 安装vue的官方插件
    npm i vue-class-component vue-property-decorator --save

    # ts-loader typescript 必须安装，其他的相信你以后也会装上的
    npm i ts-loader typescript tslint tslint-loader tslint-config-standard --save-dev
```

通过 `vue-cli` 初始化的项目配置 `TypeScript` 可以参考 https://segmentfault.com/a/1190000011744210?utm_source=tuicool&utm_medium=referral

> 注意：按照博客配置完后如果启动项目出现类似下面的错误，那就要检查自己 `webpack` 和 `ts-loader` 包的依赖版本是否一致了（please use ts-loader 3.x if you need webpack 2 or 3 support）。

```Shell
    Module build failed: TypeError: Cannot set property 'tsLoaderDefinitionFileVersions' of undefined
        at getEmit (/Users/lane/StudyCloud/Vue/vue-manage-board/node_modules/_ts-loader@4.0.0@ts-loader/dist/index.js:202:61)
        at successLoader (/Users/lane/StudyCloud/Vue/vue-manage-board/node_modules/_ts-loader@4.0.0@ts-loader/dist/index.js:34:11)
        at Object.loader (/Users/lane/StudyCloud/Vue/vue-manage-board/node_modules/_ts-loader@4.0.0@ts-loader/dist/index.js:21:12)
```

```Shell
    Module build failed: TypeError: Cannot read property 'afterCompile' of undefined
        at successfulTypeScriptInstance (/Users/lane/StudyCloud/Vue/vue-manage-board/node_modules/_ts-loader@4.0.0@ts-loader/dist/instances.js:147:27)
        at Object.getTypeScriptInstance (/Users/lane/StudyCloud/Vue/vue-manage-board/node_modules/_ts-loader@4.0.0@ts-loader/dist/instances.js:48:12)
        at Object.loader (/Users/lane/StudyCloud/Vue/vue-manage-board/node_modules/_ts-loader@4.0.0@ts-loader/dist/index.js:16:41)
```

接下来，第二波 `jsx` 写法和三方插件的支持配置可以参考 https://segmentfault.com/a/1190000011878086