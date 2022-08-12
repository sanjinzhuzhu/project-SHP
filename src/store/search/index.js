import { reqGetSearchInfo } from "@/api";
//search 模块的小仓库
const state = {
    //仓库出事状态
    searchList: {}
};
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList
    }
};
const actions = {
    //获取search模块数据
    async getSearchList({ commit }, params = {}) {
        //reqGetSearchInfo 这个函数在调用获取服务器数据的时候，至少传递一个空对象
        //params形参:是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
        let result = await reqGetSearchInfo(params);
        if (result.code == 200) {
            commit('GETSEARCHLIST', result.data);
        }
    }
};
 //项目中getters主要作用是简化数据
const getters = {
    //当前形参state，当前仓库中的state，并非大仓库中的那个state
    goodlist(state) {
        //这样写有问题 如果state.searchList.goodsList服务器的数据回来了，没问题是一个数组
        //加入网络不行 没有网 state.searchList.goodsList应该返回的是undefined
        //计算的属性值至少给一个数组

        return state.searchList.goodsList || [];
    },
    trademarkList(state){
        return state.searchList.trademarkList ||[];
    },
    attrsList(state){
        return state.searchList.attrsList ||[];
    }


};
export default {
    state,
    mutations,
    actions,
    getters
}