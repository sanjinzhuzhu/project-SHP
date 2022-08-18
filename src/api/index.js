//当前这个模块:API进行统一管理
import requests from "./request";
import mockRequests from "./mockRequest";
//三级联动接口
//api/product/getBaseCategoryList get 无参数
//发请求:axios发请求返回结果Promise对象
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' });

//获取banner(Home首页轮播图接口)
export const reqGetBannerList = () => mockRequests.get('/banner');
// export const reqGetBannerList = () => mockRequests({url:'/banner',method:'get'});

//获取floor数据
export const reqFloorList = () => mockRequests.get('/floor');

//获取Search数据 地址:/api/list 请求方式 post, 参数:需要带参数

// {
//     "category3Id": "61",
//     "categoryName": "手机",
//     "keyword": "小米",
//     "order": "1:desc",
//     "pageNo": 1,
//     "pageSize": 10,
//     "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
//     "trademark": "4:小米 "
// }

//当前这个函数需要结构外部的传递参数 
//当前这个接口(获取搜索模块的数据)，服务器传递一个默认参数【至少是一个空对象】
export const reqGetSearchInfo = (params) => requests({ url: "/list", method: "post", data: params })

//获取产品详情信息接口 URL：/api/item/{skuId} 请求方式：get

export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' });

//将产品添加到购物车中(获取更新某一个产品的个数)
//api/cart/addToCart{skuId}/{skuNum} POST
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })

// 获取购物车列表接口 /api/cart/cartList、 GET
export const reqCartList = () => requests({ url: "/cart/cartList", method: "get" })

// 删除购物车列表接口 /api/cart/deleteCart/{skuId} 、delete
export const reqDeleteCartById = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' });

//修改商品的选中状态 /api/cart/checkCart/{skuId}/{isChecked} 、 get
export const reqUpdateCheckedById = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' })

//获取验证码 /api/user/passport/sendCode/{phone} \get
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' })

//获取注册用户请求 /api/user/passport/register  post 带phone code password
export const reqUserRegister = (data) => requests({ url: '/user/passport/register', data, method: 'post' })

//获取用户登陆接口 /api/user/passort/login  post phone password
export const reqUserLogin = (data)=> requests({url:"/user/passport/login",data, method:"post"})

//获取用户信息【带上token向服务器要用户信息】 /api/user/passport/auth/getUserInfo method:get
export const reqUserInfo =()=>requests({url:'user/passport/auth/getUserInfo',method:"get"})

//退出登录接口 /api/user/passport/logout get
export const reqLogout =()=>requests({url:"/user/passport/logout",method:"get"})
