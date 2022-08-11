//从api文件封装的三级联动接口引入(这里接口是老师直接提供的，不知道怎么来的)
import { reqCategoryList ,reqGetBannerList,reqFloorList} from "@/api";

//home模块的小仓库
const state = {
    categoryList:[],//服务器返回的数据是一个数组，【根据借口返回值】
    //轮播图数据
    bannerList:[],
    //floor数据
    floorList: [],
}

const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList;
    },
    GETFLOORLIST(state,floorList){
        state.floorList = floorList;
    }
};
const actions = {
    //通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
    async categoryList({commit}){
        let result = await reqCategoryList();
         if(result.code ==200){
            commit("CATEGORYLIST",result.data);
         }
    },
    //获取首页轮播图的数据
    async getBannerList({commit}){
        let result = await reqGetBannerList();
        console.log(result)
        if(result.code ==200){
            commit('GETBANNERLIST',result.data);
        }
    },
    async getFloorList({commit}){
        let result = await reqFloorList();
        if(result.code ==200){
            //提交mudation
            commit('GETFLOORLIST',result.data);
        }
    }
};
const getters = {};
export default {
     state,
    mutations,
    actions,
    getters
}