//配置路由的地方

import Vue from 'vue';
import VueRouter from 'vue-router';
// import { VueRouter } from "vue-router";
//使用插件
Vue.use(VueRouter);

//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/login'
import Register from '@/pages/Register'

//因为 "vue-router": "^3.5.3" 从这个版本开始vue-router引入了promise 为避免点击多次执行会抛出NavigationDuplicated的警告
//1.2通过push方法传递相应的成功、失败的回调函数，可以捕获到当前错误，可以解决
//1.3通过底部的代码，可以实现解决这个错误，但是下面这个写法治标不治本，因为将来在别的
//组件中 push|replace，编程式导航还是有类似的错误

//先把VueRouter原型对象的push，先保存一份(Raplace同理修改)
let originPush = VueRouter.prototype.push;

//方法 重写push| replace
//第一个参数:告诉原来push方法，你往哪里跳转(传递哪些参数)
 VueRouter.prototype.push = function(location,resolve,reject){
   if(resolve && reject){
    originPush.call(this,location,resolve,reject)
   }else{
    originPush.call(this,location,()=>{},()=>{});
   }
 }
//配置路由
export default new VueRouter({
    //配置路由
    routes: [
        {
            path: "/home",
            component: Home,
            meta: { show: true }
        },
        {
            path: "/search",//对应面试题3，可以去掉path就没有问题 path: "/search",/:keyword
            component: Search,
            meta: { show: true },
            name: "search",
            //路由组件能不能传递props数据  可以 (有三种写法)
            //1、布尔值的写法：仅params参数
            //props:true,//好处是可以把params参数作为路由组件身上的属性
            //2、对象写法:额外的给路由组件传递一些props
            //props:{a:1,b:2},
            //3、函数写法：可以把params参数、query参数、通过props传递给路由组件
            // props: ($route) => {
            //     return { keyword: $route.params.keyword, k: $route.query.k }
            // }
            props: ($route) => ({
                keyword: $route.params.keyword, k: $route.query.k
            })
        },
        {
            path: "/login",
            component: Login,
            meta: { show: false }
        },
        {
            path: "/register",
            component: Register,
            meta: { show: false }
        },
        //重定向，在项目跑起来的时候，访问/，立马让他定向在首页
        {
            path: '*',
            redirect: "/home"
        }
    ]
})