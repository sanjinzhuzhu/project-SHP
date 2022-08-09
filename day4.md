复习:
1） 商品分类的三级列表由静态变为动态形式【获取服务器数据:解决跨域问题】
2）函数防抖与节流【面试频率高】
3）路由跳转：声明式导航（router-link)、编程式导航
编程式导航解决这个问题:自定义属性


1、开发Search模块中的TypeNav商品分类菜单(过滤动画效果)
过渡动画:前提组件｜元素无比要有v-if｜v-show指令才可以进行过渡动画

2、商品分类三级列表请求优化
在app根组件当中发送请求【根组件mounted】只执行一次

3、合并params与query参数

4、开发Home首页当中的ListContainer组件与Floor组件
但是这里需要知道一件事情：服务器返回的数据(接口)至于欧商品分类菜单分类数据，对于ListContainer组件与Floor组件数据服务器没有提供的
mock npm i mockjs
1)在src中创建一个mock文件夹
2）准备json数据(在mock文件夹中创建响应的JSON文件) --格式化一下，不然跑不起来
3）把mock数据需要的图片放置到public文件夹中【public文件夹在打包的时候，会把相应的资源原封不动的打包到dist文件夹
4）开始mock，创建mockServe.js通过mockjs插件模块来实现
5)mockServe.js文件在入口文件中引入(至少需要执行一次，才能模拟数据)

