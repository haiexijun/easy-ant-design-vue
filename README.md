# easy-ant-design-vue

### 一.项目准备

#### 安装依赖

```
npm install
```

#### 开发环境用于编译和热加载

```
npm run serve
```

#### 针对生产环境进行编译和简化

```
npm run build
```

### 二.项目介绍

这个项目是我easy-component-vue项目的第一个子项目，本项目决定是用ant-design-vue这个前端框架来开发。

这个项目的目的是基于ant-design-vue的基础上来进行二次封装，使开发后的组件能高效、简单、灵活的适用于日常开发的很多场景。比如表单弹出模态框、自定义表格、其他的多功能弹出对话框等....

上面列举的还只是我的一部分设想，如果将来有更多的需求，我也会尝试二次封装更多的业务组件。

### 三.本项目参考文档

ant-design-vue官方文档：[https://www.antdv.com/docs/vue/introduce-cn/](https://www.antdv.com/docs/vue/introduce-cn/)

我编写的easy-ant-design-vue的中文wiki：[https://github.com/haiexijun/easy-ant-design-vue/wiki](https://github.com/haiexijun/easy-ant-design-vue/wiki)

### 四.组件说明

##### 🚀️ 组件名称 ：EasyFormModal

功能：你是否会有这样的需求，比如说，在我点击新增或编辑按钮时，会弹出一个有各种表单组件的模态框，并且你填写完表单后点击提交按钮时还会进行表单校验。我开发的这个组件，你只需要简单配置一下，就可以非常简单地生成日常开发中所需的自定义模态框。这个组件可以做到到高效、高可用、高复用的生成你需要的表单模态框。

比如下面的新增物料的模态框，你只需要编写极少的代码，就可以通过EasyFormModal组件来快速生成：

![image.png](./assets/image.png)
