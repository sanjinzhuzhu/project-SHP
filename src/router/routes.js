//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
export default [
    //配置路由  path：路由都是小写
    {    
        path: "/shopcart",
        component: ShopCart,
        meta: { show: true }
    },
    {    
        path: "/addcartsuccess",
        name:'addcartsuccess',
        component: AddCartSuccess,
        meta: { show: true }
    },
    {
        path: "/detail/:skuid",
        component: Detail,
        meta: { show: true }
    },
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
