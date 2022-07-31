<template>
  <div id="app">
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- <Footer v-show="$route.path =='/home'|| $route.path=='/search'"></Footer> 可以用路由元信息-->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
   
  }
}
</script>

<style>

</style>
