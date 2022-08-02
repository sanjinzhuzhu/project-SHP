一、
1.编程式路由跳转到当前路由(参数不变)，多次执行会抛出NavigationDuplicated的警告
-路由跳转两张形式:声明式导航、编程式导航
-声明式导航没有这类问题的，因为vue-router底层已经处理好了
1.1为什么编程式导航进行路由跳转的时候，就有这种警告了
  "vue-router": "^3.5.3" 从这个版本开始vue-router引入了promise
1.2通过push方法传递相应的成功、失败的回调函数，可以捕获到当前错误，可以解决

1.3通过底部的代码，可以实现解决这个错误，但是下面这个写法治标不治本，因为将来在别的
组件中 push|replace，编程式导航还是有类似的错误
this.$router.push({name:"search",params:{keyword:this.keyword},query:{k:this.keyword.toUpperCase()}},()=>{},()=>{});

1.4
this:当前组件实例(search)VueComponent 返回的一个构造函数，里面所有的对象都可以访问到 push:VueRouter类的一个实例
this.$router属性:当前的这个属性，属性值VueRouter类的一个实例，当在入口文件注册路由的时候，给组件实例添加$router｜$route属性
function VueRouter(){

}
//原型对象的方法
VueRouter.prototype.push = function(){
//函数执行的上下文为this，VueRouter类的一个实例
}
let $router = new VueRouter();
$router.push(xxx);

二、Home模块组件拆分
--先把静态页面完成
--拆分出静态组件
--获取服务器的数据进行展示
--动态业务

三、三级联动组件完成
---由于三级联动，在Home、Search、Detail,把三级联动注册为全局组件
好处:只需要注册一次，就可以在项目任何地方使用

四、完成其余静态组件
HTML +CSS + 图片资源

五、POSTMAN测试接口
--刚刚经过Apipost工具测试，接口是没有问题的
--如果服务器返回的数据code字段200，代表服务器返回数据成功（接口地址+api+xxx）
http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList
--整个项目，接口前缀都有/api字样

六、axios二次封装
XMLHttpRequest、fetch、JQ、axios
1.为什么需要进行二次封装axios？
请求拦截器、响应拦截器 请求拦截器，可以在发请求之前可以处理一些业务、响应拦截器，当服务器数据返回以后，可以处理一些事情
step1:npm install --sava axios

2.在项目当中经常会有API文件夹 是用来放【axios】请求的
接口当中：路径都带有/api
baseURL:"/api"  如：http://xxx.xxx:8080/api

七、接口统一管理

项目小: 可以用组件的生命周期函数中发请求

项目大: axios.get('xxx')

1.跨域问题
什么是跨域: 协议、域名、端口号不同请求，称之为跨域
http://localhost:8081/#/home ----前段项目本地服务器
http://39.98.123.211         ----后台服务器

JSONP、 CROS、代理

八、nprogress进度条的使用
start :进度条开始
done: 进度条结束
进度条颜色可以修改的，需要在node_modules去修改nprogress的样式

九、vuex状态管理库

1.vuex是官方提供的一个插件，集中式管理项目中组件共用的数据
但是并不是全部项目都需要vuex，如果项目很小，完全不需要vuex，
如果项目很大，组件很多、数据很多，数据维护很费劲，vuex
state
mutations
actions
getters
modules

2.vuex基本使用
