# TypeScript 相关

## 一、TypeScript 基础

### [1.1.TypeScript——后盾人](https://www.houdunren.com/front/system/11)

#### 1.1.1.第一章 TypeScript小白快速入门

> 使用TypeScript可以构建健壮的JS项目，掌握TS的使用提升前端开发竞争力。

##### 1.1.01.TypeScript视频与代码获取方式

视频地址：[TypeScript——后盾人](https://www.bilibili.com/video/BV1MQ4y1B7fs?p=1)

代码地址：[Gitee——后盾人v2021](https://gitee.com/houdunren/v2021)

##### 1.1.02.为什么选择TypeScript

TypeScript是JavaScript的超集。强类型检查、支持最新ECMAScript规范、编译成各种不同版本的JS

##### 1.1.03.安装Typescript开发环境

安装Node.js环境，再安装Typescript开发环境

|            | Npm                       | Yarn                   | Brew(Mac OS)            | Pacman(Linux)              |
| ---------- | ------------------------- | ---------------------- | ----------------------- | -------------------------- |
| 全局安装： | npm install typescript -g | yarn add typescript -g | brew install typescript | sudo pacman -Sy typescript |

局部安装Typescript开发环境，限定版本：创建文件夹，初始化package.json文件：yarn init -y，安装Typescript：yarn add typescript -D

|            | Node.js | NPM    | Yarn    | Typescript |
| ---------- | ------- | ------ | ------- | ---------- |
| 版本查询： | node -v | npm -v | yarn -v | tsc -v     |

##### 1.1.04.VSCode的TypeScript配置

TypeScript的文件拓展名是**.ts**

使用VSCode编辑器配置开发环境，取消JS类型校验：Settings --> 输入框输入validate --> 选择TypeScript --> disable JavaScript validation

##### 1.1.05.TypeScript Compile编译

tsc是TypeScript Compile的简写，-w是--watch的简写

**编译文件：**tsc FileName.ts

**监听文件更改，自动编译ts文件：**tsc FileName.ts -w

##### 1.1.06.体验TypeScript类型校验

##### 1.1.07.TypeScript类型推断

##### 1.1.08.TypeScript数组的类型推断

##### 1.1.09.TypeScript推断对象类型

##### 1.1.10.去掉VSCode对TypeScript的校验

##### 1.1.11.TypeScript设置基本数据类型

##### 1.1.12.对象类型在TypeScript中的设置

##### 1.1.13.组合类型在TypeScript的声明方式

##### 1.1.14.使用tsconfig配置文件运行

##### 1.1.15.any类型详解

##### 1.1.16.unknown与any的区别及as类型断言

##### 1.1.17.void与never在TypeScript中的区别

##### 1.1.18.null与undefined类型技巧

##### 1.1.19.函数在 TypeScript 中的声明

##### 1.1.20.函数参数的声明

##### 1.1.21.函数返回值类型的修饰

##### 1.1.22.使用type对函数参数进行声明

##### 1.1.23.函数的结构定义

##### 1.1.24.剩余参数在TS中的使用

##### 1.1.25.元组tuple的使用规范

#### 1.1.2.第二章 TypeScript枚举于断言

#### 1.1.3.第三章 TypeScript类与接口

#### 1.1.4.第四章 TypeScript泛型Generices

#### 1.1.5.第五章 TypeScript装饰器Decorators

#### 1.1.6.第六章 TypeScript命名空间与编译打包

#### 1.1.7.第七章 TypeScript Webpack打包工具

#### 1.1.8.第八章 TypeScript类型工具

## 二、TypeScript体操

