一、个人中心完成
面试的时候:是否封装过组件？分页器、日历
个人中中心当中:分页器

二、全局守卫

未登录访问，交易相关(trade)、支付相关(pay、paysuccess)、用户中心(center)相关跳转到登录页面

三、路由独享守卫
只有从购物车界面才能跳转到交易页面(创建订单)
只有从交易页面(创建订单)页面才能跳转到支付页面
只有从支付页面才能跳转到支付成功页面

四、图片懒加载

https://www.npmjs.com/package/vue-lazyload

五、自定义插件

 1.myPlugins.js----配置使用逻辑
 2.去main.js----引入
 3.app.vue---dom呈现样式数据

六、vee-validate基本使用

第一步:插件安装与引入
npm i vee-validate@2 --legacy-peer-deps

import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CH'
Vue.use(VeeValidate)

第二部:提示信息
VeeValidate.Validator.localize('zh_CN',{
    messages:{
        ...zh_ZH.messages,
        is:(field) =>`${field}必须与密码相同` //修改内置规则的message,确认密码和密码相通
    },
    attributes:{//给校验的field 属性命映射中文名称
    phone: '手机号',
    code: '验证码',
    password: '密码',
    password1: '确认密码',
    isCheck: '协议'
    }
})

第三步:基本使用
<input
        placeholder= "请输入你的手机号"
        v-model="phone"
        name="phone"
        v-validate="{required:true, regex: /^1\d{10}$/ }"
        :class="{ invalid: errors.has('phone') }"
/>
<span class="error-msg">{{ errors.first("phone")}}</span>

const success = await this.\$validator.validateAll();//全部表单验证

VeeValidate.Validator.extend('agree',{
    validate:value =>{
        return value
    },
    getMessage:field => field + '必须同意'
})

七、路由懒加载
