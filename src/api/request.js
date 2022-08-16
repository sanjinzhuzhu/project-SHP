//对于axios进行二次封装，因为是利用已有的axios进行封装，所以应该引入
import axios from "axios";
//引入进度条
import nprogress from "nprogress";
//在当前模块中引入store
import store from "@/store"
//引入进度条样式
import "nprogress/nprogress.css";
//引入vuex仓库模块
// import store from '@/store'

//start:进度条开始  done: 进度条结束

//1.利用axios对象方法create，去创建一个axios实例
//2.request就是axios，只不过稍微配置一下

const requests = axios.create({
    //配置对象
    //基础路径，发送请求的时候，路径当中会出现api
    baseURL: "http://localhost:8080/api",
    //代表请求超时的时间5s
    timeout: 5000,
});
//请求拦截器(requests.interceptors),请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config) => {
    //config:配置对象，对象里面有一个属性很重要，headers请求头
    //进度条开始动

    //测试仓库是否引入
    console.log(store);
    if(store.state.detail.uuid_token){
        //请求头添加一个字段，和后台老师商量好了
        config.headers.userTempId = store.state.detail.uuid_token
        //在刷新点击页面search ，刷新一下，查看网络中list有没有出现userTempId: 78f7b1a8-d575-40c2-a94e-0588e023fc03
    }
    nprogress.start();
    return config;
})

//响应拦截器
requests.interceptors.response.use((res) => {
    //成功的回调函数，服务器响应数据出来以后，响应拦截器可以检测到，可以做一些事情
    //进度条结束
    nprogress.done();
    return res.data;
}, (error) => {
    //响应失败的回调函数
    return Promise.reject(new Error('faile'));
})


//对外暴露
export default requests;