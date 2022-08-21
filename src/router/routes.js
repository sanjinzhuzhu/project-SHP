//引入路由组件
//import Home from '@/pages/Home'
//import Search from '@/pages/Search'
import Login from '@/pages/login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
//import Center from '@/pages/Center'
//引入二级路由组件
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'





//当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。
//如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由
//被访问的时候才加载对应组件，这样就会更加高效。


export default [
    //配置路由  path：路由都是小写
    {
        path: "/center",
        component: () => import("@/pages/Center"),
        meta: { show: true },
        //二级路由组件
        children: [
            {
                path: "myorder",
                component: MyOrder
            },
            {
                path: "grouporder",
                component: GroupOrder
            },
            {
                path: "/center",
                redirect: '/center/myorder'
            },
        ]
    },
    {
        path: "/paysuccess",
        component: () => import("@/pages/PaySuccess"),
        meta: { show: true }
    },
    {
        path: "/pay",
        component: () => import("@/pages/Pay"),
        meta: { show: true },
        beforeEnter: (to, from, next) => {
            if (from.path == "/trade") {
                next()
            } else {
                next(false)
            }
        }
    },
    {
        path: "/trade",
        component: () => import("@/pages/Trade"),
        meta: { show: true },
        //路由独享
        beforeEnter: (to, from, next) => {
            if (from.path == "/shopcart") {
                next()
            } else {
                next(false)
            }
        }
    },
    {
        path: "/shopcart",
        component: () => import("@/pages/ShopCart"),
        meta: { show: true }
    },
    {
        path: "/addcartsuccess",
        name: 'addcartsuccess',
        component: () => import("@/pages/AddCartSuccess"),
        meta: { show: true }
    },
    {
        path: "/detail/:skuid",
        component: () => import("@/pages/Detail"),
        meta: { show: true }
    },
    {
        path: "/home",
        component: () => import("@/pages/Home"),
        meta: { show: true }
    },
    {
        path: "/search",//对应面试题3，可以去掉path就没有问题 path: "/search",/:keyword
        component: () => import("@/pages/Search"),
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
        component: () => import("@/pages/Register"),
        meta: { show: false }
    },
    //重定向，在项目跑起来的时候，访问/，立马让他定向在首页
    {
        path: '*',
        redirect: "/home"
    }
]
