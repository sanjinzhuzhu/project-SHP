
一、vue-cil 脚手架初始化项目
```
1.设置npm 淘宝镜像
npm config set registry https://registry.npm.taobao.org

2.下载vue-cli
npm install -g @vue/cli
```


二、项目的其他配置
1. 项目运行起来的时候，让浏览器自动打开

"scripts": {
    "serve": "vue-cli-service serve --open",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
2. eslint 校验功能关闭
在根目录下，创建一个vue.config.js
比如：声明变量但是没有使用eslint校验工具报错

3.src文件夹简写的方法，配置别名 @ 代表src文件夹
jsconfig.json配置别名@提示
{
    "compilerOptions": {
        "baseUrl": "./",
        "paths":{
            "@/*: ["src/*"]
        }
    },
    "exclude":["node_modules","dist"]
}


三、项目路由的分析
vue-router
前端路由：kv 键值对
key: URL(地址栏中的路径)
value: 相应的路由组件

路由组件:
Home
Search
login
Register
----------- ---------------------------------------------------
非路由组件
header 【首页、搜索页】
footer 【在首页、搜索页、】但是在登陆｜注册页面没有

四、完成非路由组件Header与Footer业务
1.书写静态页面(HTML +CSS)
2.拆分组件
3.获取服务器的数据动态展示
4.完成相应的动态业务逻辑

注意：
1、创建组件的时候，组件结构+组件样式+图片资源
2、项目采用的less样式，浏览器不识别less样式，需要通过less-loader【安装5版本的】进行处理less，把less样式变为css样式，浏览器才可以识别。(npm install --save less less-loader@5)
3、如果想让组件识别less样式，需要在style标签的身上加上lang-less

4.1使用组件的步骤(非路由组件)
-创建或者定义
-引入
-注册
-使用

五、路由组件的搭建
1.vue-router( npm install --save vue-router)
根据之前分析，路由组件应该有四个Home、Search、login、Register
-components文件夹:经常防止的非路组件(共用全局组件)
-pages｜views文件夹:经常放置路由组件
2.配置路由
项目当中配置的路由一般放置在router文件夹中

3.路由的跳转
路由的跳转有两种形式：
声明式导航router-link ,务必要有to属性
编程式导航push｜replace

编程式导航：声明式导航能做的，编程式都可以做，但是编程式导航除了可以进行路由跳转，还可以做一些其他的业务逻辑


总结
路由组件与非路由组件的区别？
1.路由组件一般放置在pages｜views文件夹中，非路由组件一般放置components文件夹中
2.路由组件一般需要在router文件夹中进行注册(使用的即为组件的名字)，非路由组件在使用的时候，一般都是以标签的形式使用
3.注册完路由，不管路由组件、还是非路由组件身上都有$route、$router 属性
$route ： 一般获取路由信息【路径、query、params等】
$router：一般进行编程式导航跳转【push｜repalce】

六、Footer组件显示与隐藏
显示或者隐藏组件：v-if(频繁操作dom）｜v-show (操作样式)
Footer组件：在Home、Search显示组件；在登陆、注册时候隐藏的

1.可以根据组件身上的$route获取当前路由的信息，通过路由路径判断显示与隐藏
2.配置路由的时候，可以给路由添加路由元信息【meta】，路由需要配置对象，它的key不能乱写

