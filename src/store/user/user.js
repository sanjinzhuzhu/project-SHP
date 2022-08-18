import { reqGetCode, reqUserInfo, reqUserLogin, reqUserRegister,reqLogout } from '@/api'
import { setToken,removeToken } from '@/utils/token'
const state = {
    code: '',
    token: localStorage.getItem('TOKEN'),//'',
    userInfo: {}

}
const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state, token) {
        state.token = token
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    //清除本地数据
    CLEAR(state){
        //把仓库中用户信息情况
        state.token = '';
        state.userInfo = {};
        //本地存储数据清除
        removeToken();
    }
}
const actions = {
    //获取验证码
    async getCode({ commit }, phone) {
        //获取验证码的这个接口，是把验证码返回，但是正常情况是，后台把验证码发到用户
        let result = await reqGetCode(phone)
        // console.log(result);
        if (result.code == 200) {
            commit("GETCODE", result.data);
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    //用户注册
    async userRegister({ commit }, user) {
        let result = await reqUserRegister(user);
        // console.log(result);
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    //登录业务--服务器发请求
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data)
        // console.log(result);
        // 服务器下发toke,用户为宜标识符(uuid)
        //将来经常通过token找服务器要用户信息进行展示
        if (result.code == 200) {
            //用户已经登录成功且获取到token
            commit("USERLOGIN", result.data.token);
            //持久化存储token 普通表示
            // localStorage.setItem('token',result.data.token)
            // 函数表示
            setToken(result.data.token);
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    //获取用户信息
    async getUserInfo({ commit }) {
        let result = await reqUserInfo();
        //    console.log(result);
        if (result.code == 200) {
            //提交用户信息
            commit("GETUSERINFO", result.data)
            return 'ok'
        }// else {
        //     return Promise.reject(new Error('faile'))
        // }
    },
    //退出登录
    async userLogout({ commit }) {
        //只是想服务器发请求，通知服务器通知清除token
        let result = await reqLogout()
        //action里面不能操作state，提交mutation修改state
        if(result.code==200){
            commit('CLEAR')
            return'ok';
        }else{
            return Promise.reject(new Error('faile'))
        }
    }
    
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters,
}