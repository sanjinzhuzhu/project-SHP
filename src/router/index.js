//配置路由的地方

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

//使用插件
Vue.use(VueRouter);
//引入store
import store from '@/store'
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
// export default new VueRouter({
//     //routes : routes  kv一致省略
//     routes,
//     //滚动行为
//     scrollBehavior(to, from, savedPosition) {
//         //返回 x y
//         return { y: 0 };
//     }

// })
let router = new VueRouter({
    routes,
    //滚动行为
    scrollBehavior(to, from, savedPosition) {
        //返回 x y
        return { y: 0 };
    }
})
//全局守卫:前置守卫(在路由跳转之间进行判断)
router.beforeEach(async (to, from, next) => {
    //to ,可以跳转到哪个路由信息
    //from，可以获取到从哪个路由来的信息
    //next，放行函数
    // next();放行
    // next(path)放行到指定路由
    //next(false) 中断当前路径返回原来

    // console.log(store); 打印查看token在哪里
    //用户登录了，才会有token，未登录一定不会有token
    let token = store.state.user.token
    //用户信息  但是是空对象 空对象判断永远是真，
    // let userInfo = store.state.user.userInfo
    // console.log(userInfo);
    //要通过属性名去判断
    let userInfo = store.state.user.userInfo.name
    //用户已经登录
    if (token) {
        //用户已经登录了还想去login 不能放行,停留在首页
        if (to.path == '/login') {
            next('/')

        } else {
            //登录了，但是去的不是login
            if (name) {
                next()
            } else {
                //没有用户信息 派发action 让仓库存储用户信息在跳转
                try {
                    await store.dispatch('getUserInfo')
                    next()

                } catch (error) {
                    //token失效了
                    //清除token 获取不到用户的信息
                    await store.dispatch('userLogout');
                    next('/login');
                }
            }
        }
    } else {
        //未登录：不能去交易相关、支付相关page|paysuccess 、个人中心
        //未登录:去上面这些路由---跳登录页
        let toPath = to.path;
        if (toPath == '/trade' ||toPath == '/pay' ||toPath.indexOf('/center')!=-1 ){
            next('/login?redirect='+toPath);
        } else {
            //去得不是上面这些路由(home|search|shopcart)放行
            next()
        }

    }
})
export default router;