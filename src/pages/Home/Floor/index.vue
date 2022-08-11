<template>
  <div class="floor">
    <div class="py-container">
      <div class="title clearfix">
        <!-- <h3 class="fl">家用电器</h3> -->
        <h3 class="fl">{{ list.name }}</h3>
        <div class="fr">
          <ul class="nav-tabs clearfix">
            <li
              class="active"
              v-for="(nav, index) in list.navList"
              :key="index"
            >
              <a href="#tab1" data-toggle="tab">{{ nav.text }}</a>
            </li>
            <!-- <li>
              <a href="#tab2" data-toggle="tab">大家电</a>
            </li>
            <li>
              <a href="#tab3" data-toggle="tab">生活电器</a>
            </li>
            <li>
              <a href="#tab4" data-toggle="tab">厨房电器</a>
            </li>
            <li>
              <a href="#tab5" data-toggle="tab">应季电器</a>
            </li>
            <li>
              <a href="#tab6" data-toggle="tab">空气/净水</a>
            </li>
            <li>
              <a href="#tab7" data-toggle="tab">高端电器</a>
            </li> -->
          </ul>
        </div>
      </div>
      <div class="tab-content">
        <div class="tab-pane">
          <div class="floor-1">
            <div class="blockgary">
              <ul class="jd-list">
                <li v-for="(keyword, index) in list.keywords" :key="index">
                  {{ keyword }}
                </li>
                <!-- <li>4K电视</li>
                                    <li>空气净化器</li>
                                    <li>IH电饭煲</li>
                                    <li>滚筒洗衣机</li>
                                    <li>电热水器</li> -->
              </ul>
              <!-- <img src="./images/floor-1-1.png" /> -->
              <img :src="list.imgUrl" />
            </div>
            <div class="floorBanner">
              <!-- 轮播图的地方 轮播图封装-->
              <Carousel :list="list.carouselList"/>
            <!-- <div class="swiper-container" ref="floor1Swiper">
                <div class="swiper-wrapper">
                  <div
                    class="swiper-slide"
                    v-for="carousel in list.carouselList"
                    :key="carousel.id"
                  >
                    <img :src="carousel.imgUrl" /> -->
                    <!-- <img src="./images/floor-1-b01.png"> -->
                  <!-- </div> -->
                  <!-- <div class="swiper-slide">
                    <img src="./images/floor-1-b02.png" />
                  </div>
                  <div class="swiper-slide">
                    <img src="./images/floor-1-b03.png" />
                  </div> -->
                <!-- </div> -->
                <!-- 如果需要分页器 -->
                <!-- <div class="swiper-pagination"></div> -->

                <!-- 如果需要导航按钮 -->
                <!-- <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div> -->
            </div>
            <div class="split">
              <span class="floor-x-line"></span>
              <div class="floor-conver-pit">
                <img :src="list.recommendList[0]" />
              </div>
              <div class="floor-conver-pit">
                <img :src="list.recommendList[1]" />
              </div>
            </div>
            <div class="split center">
              <img :src="list.bigImg" />
            </div>
            <div class="split">
              <span class="floor-x-line"></span>
              <div class="floor-conver-pit">
                <img :src="list.recommendList[2]" />
              </div>
              <div class="floor-conver-pit">
                <img :src="list.recommendList[3]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//引入Swiper 
// import Swiper from "swiper";
export default {
  name: "",
  props: ["list"],
  //组件挂载完毕的地方 ，因为结构不是在floor组件请求的，是父组件传过来的，所以结构已经有了，就可以直接写在mounted这里
  mounted() {
    // var mySwiper = new Swiper(
    //   this.$refs.floor1Swiper,
    //   //document.querySelector(".swiper-container"),vue中最好不要用dom来操作元素
    //   {
    //     loop: true,
    //     //分页器
    //     pagination: {
    //       el: ".swiper-pagination",
    //       //点击小球的时候切换图片
    //       clickable: true,
    //     },
    //     navigation: {
    //       nextEl: ".swiper-button-next",
    //       prevEl: ".swiper-button-prev",
    //     },
    //   }
    // );
  },
  //轮播图封装
//   watch: {
//     list: {
//       //立即监听,不管数据有没有变化，上来就立即监听一次
//       //为什么监听不到list：因为数据没有发生变化(数据是父亲给的，里面的数据是一个对象，该有的都有)
//       immediate: true,
//       handler() {
//         //只能监听到数据已经有了，但是v-for动态渲染结构还是没有办法确定，因此还是需要nextTick
//         this.$nextTick(() => {
//           var mySwiper = new Swiper(
//             this.$refs.floor1Swiper,
//             //document.querySelector(".swiper-container"),vue中最好不要用dom来操作元素
//             {
//               loop: true,
//               //分页器
//               pagination: {
//                 el: ".swiper-pagination",
//                 //点击小球的时候切换图片
//                 clickable: true,
//               },
//               navigation: {
//                 nextEl: ".swiper-button-next",
//                 prevEl: ".swiper-button-prev",
//               },
//             }
//           );
//         });
//       },
//     },
//   },
};
</script>

<style scoped lang='less'>
.floor {
  margin-top: 15px;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .title {
      .fl {
        float: left;
        color: #c81623;
        font-size: 20px;
        line-height: 30px;
        margin: 9px 0;
        font-weight: 700;
      }

      .fr {
        float: right;

        .nav-tabs {
          margin: 10px 0 0;
          display: inline-block;

          li {
            float: left;
            line-height: 18px;

            a {
              padding-top: 1px;
              font-weight: 400;
              background-color: #fff;

              &::after {
                content: "|";
                padding: 0 10px;
              }
            }

            &:nth-child(7) {
              a {
                &::after {
                  content: "";
                }
              }
            }

            &.active {
              a {
                color: #e1251b;
              }
            }
          }
        }
      }
    }

    .tab-content {
      border-top: 2px solid #c81623;
      border-bottom: 1px solid #e4e4e4;

      .tab-pane {
        .floor-1 {
          height: 360px;
          display: flex;

          .blockgary {
            width: 210px;
            height: 100%;
            background: #f7f7f7;

            .jd-list {
              padding: 15px 0;
              overflow: hidden;

              li {
                list-style-type: none;
                float: left;
                width: 40%;
                margin: 0 10px;
                border-bottom: 1px solid #e4e4e4;
                text-align: center;
                line-height: 26px;
              }
            }

            img {
              width: 100%;
            }
          }

          .floorBanner {
            width: 330px;
            height: 100%;
          }

          .split {
            width: 220px;
            height: 100%;
            position: relative;

            .floor-x-line {
              position: absolute;
              background: #e4e4e4;
              width: 220px;
              height: 1px;
              top: 180px;
            }

            .floor-conver-pit {
              width: 100%;
              height: 50%;

              img {
                width: 100%;
                height: 100%;
                transition: all 400ms;

                &:hover {
                  opacity: 0.8;
                }
              }
            }
          }

          .center {
            border: 1px solid #e4e4e4;
          }
        }
      }
    }
  }
}
</style>