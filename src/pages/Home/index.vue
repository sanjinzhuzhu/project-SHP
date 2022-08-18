<template>
  <div>
    <!-- 三级联动组件已经注册为全局组件，因此不需要在引入 -->
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <!-- floor 这个组件:自己在组件是没有发请求的，数据是父组件给的 -->
    <Floor v-for="floor in floorList" :key="floor.id" :list="floor"/>
    <!-- <Floor/> -->
    <Brand/>
    <!-- <button @click="add">点击我加上1</button>
    <span>仓库的数据{{count}}</span>
    <button @click="jian">点击我减1</button> -->
  </div>
</template>

<script>
//引入其余的组件
import ListContainer from '@/pages/Home/ListContainer';
import Recommend from '@/pages/Home/Recommend';
import Rank from '@/pages/Home/Rank';
import Like from '@/pages/Home/Like';
import Floor from '@/pages/Home/Floor';
import Brand from '@/pages/Home/Brand';
import { mapState } from 'vuex';

// import { mapState } from 'vuex';
export default {
    name:'',
    components:{
        ListContainer,
        Recommend,
        Rank,
        Like,
        Floor,
        Brand,
    },
    // computed:{
    //     ...mapState(['count'])
    // },
    // methods:{
    //   add() {
    //     //派发action
    //     this.$store.dispatch('add')
    //   }  
    // }
    // 因为floor有两个一样的，不好在floor组件内遍历，组件数据在home父组件挂载传给子组件
  mounted(){
    //派发action，获取floot组件的数据
    this.$store.dispatch('getFloorList')
    // //派发action，获取用户信息token在首页展示
    // this.$store.dispatch('getUserInfo')
  },
  computed:{
    ...mapState({
      floorList:state=> state.home.floorList
    })
  }
};
</script>

<style>
</style>