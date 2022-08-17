import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from "@/api";
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
    //修改购物车某一个产品选中的状态
    async updateCheckedById({ commit }, { skuId, isChecked }) {
        let result = await reqUpdateCheckedById(skuId, isChecked);
        if (result.code == 200) {
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    //删除全部勾选的产品 可以去调deleteCartListBySkuId
    //context：小仓库，commit[提交mutations修改state] getters[计算属性] dispath[派发action] state[当前仓库数据]
    deleteAllCheckedCart({dispatch,getters}) {
        //console.log(getters.cartList.cartInfoList);
        //获取购物车中全部的产品(是一个数组)
        let PromiseAll = [];
        getters.cartList.cartInfoList.forEach(item => {
            // console.log(123);
            let promise = item.isChecked==1?dispatch('deleteCartListBySkuId',item.skuId):'';
            //将每一次返回的Promise添加到数组当中
            PromiseAll.push(promise);
        });
        //只要全部的p1｜p2都成功，返回结果即位成功
        //如果有一个失败，返回即为失败结果
        return Promise.all(PromiseAll)
    }
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