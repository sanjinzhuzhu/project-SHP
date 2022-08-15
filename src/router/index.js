//配置路由的地方

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

//使用插件
Vue.use(VueRouter);

// //引入路由组件 放在routes.js中了
// import Home from '@/pages/Home'
// import Search from '@/pages/Search'
// import Login from '@/pages/login'
// import Register from '@/pages/Register'
// import Detail from '@/pages/Detail'

//因为 "vue-router": "^3.5.3" 从这个版本开始vue-router引入了promise 为避免点击多次执行会抛出NavigationDuplicated的警告
//1.2通过push方法传递相应的成功、失败的回调函数，可以捕获到当前错误，可以解决
//1.3通过底部的代码，可以实现解决这个错误，但是下面这个写法治标不治本，因为将来在别的
//组件中 push|replace，编程式导航还是有类似的错误

//先把VueRouter原型对象的push，先保存一份(Raplace同理修改)
let originPush = VueRouter.prototype.push;

//方法 重写push| replace
//第一个参数:告诉原来push方法，你往哪里跳转(传递哪些参数)
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}
//配置路由
export default new VueRouter({
    //routes : routes  kv一致省略
    routes,
    //滚动行为
    scrollBehavior(to, from, savedPosition) {
        //返回 x y
        return { y: 0 };
    }

})