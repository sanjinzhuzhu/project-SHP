一、登录过后首页用户信息的展示
1.当用户注册完成 用户登录【用户名+密码】向服务器发请求（组件派发action:userLogin）登录成功获取token ，存储在仓库中(非持久化)路由跳转到home首页

2.因此在首页当中mounted派发action(getUserInfo)获取用户信息，一级动态展示header组件内容

3.一刷新home首页，获取不到用户信息(token vuex非持久化存储)

4.持久化存储token
a,存在问题 
多个组件展示用户信息需要在每个组件的mounted触发 this.$store.dispatch('getUserInfo')不行
b,存在问题
用户已经登录了，就不应该会登录页

二、退出登录