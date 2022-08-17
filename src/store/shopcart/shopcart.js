import { reqCartList, reqDeleteCartById } from "@/api";
const state = {
    cartList: []
};
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList;
    }
};
const actions = {
    //获取购物车列表数据
    async getCartList({ commit }) {
        let result = await reqCartList()
        //测试是否能获取个人的购物车数据
        // console.log(result);
        if (result.code == 200) {
            commit("GETCARTLIST", result.data)
        }
    },
    //删除购物车某一个产品
    async deleteCartListBySkuId({ commit }, skuId) {
        let result = await reqDeleteCartById(skuId);
        if (result.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
};
const getters = {
    cartList(state) {
        return state.cartList[0] || {}//数组里面第零个至少是一个对象
        //由于最终要获得的是cartInfoList里数据，所以需要继续捞，在shopcart文件index.vue
        //现在可以去动态展示数据了
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}