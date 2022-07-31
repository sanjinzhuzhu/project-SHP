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
//函数执行的上下文为this
}
let $router = new VueRouter();
$router.push(xxx);