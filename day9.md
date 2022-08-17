一、加入购物车按钮
1.路由跳转之前发请求
2.成功路由跳转与参数传递
浏览器存储功能:HTML5新增的，本地存储和会话存储
本地存储:持久化 ---5M
会话存储：浏览器关闭  数据结束
3.失败提示失败信息

二、addCartSucce
1.查看详情
2.查看购物车

三、购物车
1.购物车静态组件 -需要修改样式结构
调整css各个项目对其   删除第三项  15 35 10 17 10 13
2.向服务器发器ajax，获取购物车数据---写vuex--组件获取数组-展示数组
a.获取购物车列表接口 /api/cart/cartList、 GET
b.在store中--创建shopcart.js去获取数据 由vuex管理 核心五个(S、M、A、G)
c.去主仓库注册一次， 进行模块式开发在index.js 引入shopcart.js
d.在写三连环 在shopcart.js 
  d1）引入接口 --import { reqCartList } from "@/api";
  d2）操作action发请求获取购物车列表数据  
  const actions = {
      //获取购物车列表数据
      async getCarList({ commit }) {
          let result = await reqCartList()
          console.log(result);
      }
  };
e.回到ShopCart文件index.vue进行挂载，查看是否获取到
 mounted() {
    //防止点击多次，就请求多次
    this.getData();
  },
  methods: {
    //获取个人购物车数据
    getData() {
      this.$store.dispatch("getCartList");
    },
  },
};//请求成功控制台显示{code: 200, message: '成功', data: Array(0), ok: true}
Array(0)这里发请求的时候，是获取不到你购物车里面的数据，因为服务器不知道你是谁
3.UUID临时游客身份
新建一个utils文件下面在新建一个uuid_token.js用于放一些方式, 比如正则、游客；这边加入购物车在detail里，在到仓库detail文件detail.js中 state配置  uuid_token:getUUID()，并记得引入 import {getUUID} from '@/utils/uuid_token';
配置好后 去vue仓库中查看是否有uuid存在，如果存在，在操作下一步，数据带给服务器
在api文件的request.js中，但是游客还在store中，所以捞不到数据，所以需要在请求仓库中模拟得捞到
捞到后在到request.js中引入store，最后在到api中

4.动态展示购物车
在去shop.js里面配置购物车的 vuex 由于数据被包裹的好几层，需要处理一下
详情见于shop.js里面的


四、修改购物车产品的数量(需要发请求：参数理解)
a.发请求
export const reqDeleteCartById = (skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'});

b.shopcart Vuex获数据进行配置
c.在去shopcart文件index.vue中的结构中找到第六个类 写点击事件


五、删除某一个产品[函数节流]
<!-- import throttle from "lodash/throttle"; -->

六、修改商品选中的状态
1.发请求  


