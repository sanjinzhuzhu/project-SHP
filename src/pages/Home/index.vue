<template>
  <div>
    <!-- 三级联动组件已经注册为全局组件，因此不需要在引入 -->
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor/>
    <Floor/>
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
};
</script>

<style>
</style>