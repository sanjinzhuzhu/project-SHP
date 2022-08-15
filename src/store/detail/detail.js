import { reqGoodsInfo, reqAddOrUpdateShopCart } from "@/api";
//封装游客身份模块uuid，生成一个随机字符串不能在变了
import {getUUID} from '@/utils/uuid_token';
const state = {
    goodInfo: {},
    //游客临时身份 
    uuid_token:getUUID()
    //getUUID()对外暴露的一个函数
}
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo;
    }
}
const actions = {
    async getGoodInfo({ commit }, skuId) {
        let result = await reqGoodsInfo(skuId)
        if (result.code == 200) {
            commit('GETGOODINFO', result.data);
        }
    },
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        //加入购物车返回结果
        let result = await reqAddOrUpdateShopCart(skuId, skuNum)
        //加入购物车成功
        if (result.code = 200) {
            return "ok"

        } else {
            //加入购物车失败
            return Promise.reject(new Error('faile'))
        }
    }
}
//getters 来简化数据
const getters = {
    //路径导航简化的数据
    categoryView(state) {
        //因为state.goodInfo初始状态为空对象，所以下面的categoryView属性值为undefined
        //所以categoryView属性值至少是一个空对象，才不会报错
        return state.goodInfo.categoryView || {};
    },
    //简化产品信息的数据
    skuInfo(state) {
        return state.goodInfo.skuInfo || {};
    },
    //产品售卖属性的简化
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || [];
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}