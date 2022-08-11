<template>
 <div class="swiper-container" ref="floor1Swiper">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="carousel in list"
              :key="carousel.id"
            >
              <!-- <img src="./images/banner1.jpg" /> -->
              <img :src="carousel.imgUrl" />
            </div>
            
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>

          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>   
</template>

<script>
import Swiper from "swiper";
export default {
    name:'Carousel',
    props:['list'],
    watch: {
    list: {
      //立即监听,不管数据有没有变化，上来就立即监听一次
      //为什么监听不到list：因为数据没有发生变化(数据是父亲给的，里面的数据是一个对象，该有的都有)
      immediate: true,
      handler() {
        //只能监听到数据已经有了，但是v-for动态渲染结构还是没有办法确定，因此还是需要nextTick
        this.$nextTick(() => {
          var mySwiper = new Swiper(
            this.$refs.floor1Swiper,
            //document.querySelector(".swiper-container"),vue中最好不要用dom来操作元素
            {
              loop: true,
              //分页器
              pagination: {
                el: ".swiper-pagination",
                //点击小球的时候切换图片
                clickable: true,
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
            }
          );
        });
      },
    },
  },
}
</script>

<style scoped lang='less'>

</style>