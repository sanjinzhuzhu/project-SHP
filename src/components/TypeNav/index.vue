<template>
  <div class="type-nav">
    <div class="container">
      <!-- 事件委派｜事件委托 -->
      <div @mouseleave="leaveIndex">
        <h2 class="all">全部商品分类</h2>
        <!-- 三级联动 -->
        <div class="sort">
          <div class="all-sort-list2">
            <div
              class="item bo"
              v-for="(c1, index) in categoryList.slice(0, 16)"
              :key="c1.categoryId"
              :class="{ cur: currentIndex == index }"
            >
              <h3 @mouseenter="changeIndex(index)" @mouseleave="leaveIndex">
                <a href="">{{ c1.categoryName }}-{{ index }}</a>
              </h3>
              <!-- 二、三级分类 -->
              <div
                class="item-list clearfix"
                :style="{ display: currentIndex == index ? 'block' : 'none' }"
              >
                <div
                  class="subitem"
                  v-for="(c2, index) in c1.categoryChild"
                  :key="c2.categoryId"
                >
                  <dl class="fore">
                    <dt>
                      <a href="">{{ c2.categoryName }} -{{ index }}</a>
                    </dt>
                    <dd>
                      <em
                        v-for="(c3, index) in c2.categoryChild"
                        :key="c3.categoryId"
                      >
                        <a href="">{{ c3.categoryName }}-{{ index }}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
//引入方式:把lodash全部功能函数引入
import throttle from "lodash/throttle";


export default {
  name: "TypeNav",
  data() {
    return {
      //存储用户鼠标移上哪一个一级分类
      currentIndex: -1,
    };
  },
  //组件挂载完毕：可以向服务器发请求
  mounted() {
    //通知Vuex发请求，获取数据，存储于仓库中
    this.$store.dispatch("categoryList");
  },
  computed: {
    ...mapState({
      //右侧需要的是一个函数，当使用这个计算数学的时候，右侧函数会立即执行一次
      // categoryList:(state)=>{
      //     return state.home.categoryList;
      // }简写为下面
      categoryList: (state) => state.home.categoryList,
    }),
  },
  methods: {
    //鼠标进入修改响应式数据currentIndex属性
    //changeIndex(index) {},
    //throttle回调函数别用箭头函数，可能出现上下文this

    changeIndex: throttle(function (index) {
      //index:鼠标移上某一个一级分类的元素的索引值
      //正常情况(用户慢慢的操作)：鼠标进入，每一个一级分类h3，都会触发鼠标进入事件
      //非正常情况(用户操作很快) ：本身全部的一级分类都应该触发鼠标进入事件，但是经过测试，只有部分h3触发了
      //就是由于用户行为过快，导致浏览器反应不过来。如果当前回调函数中有一些大量业务，有可能出现卡顿现象

      //index:鼠标移上某一个一级分类的元素的索引值
      this.currentIndex = index;
    }, 50),
    //一级分类鼠标移出的事件回调
    leaveIndex() {
      //鼠标移出currentIndex,变为-1；
      this.currentIndex = -1;
    },
  },
};
</script>

<style scoped lang='less'>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          //   &:hover {
          //     .item-list {
          //       display: block;
          //     }
          //   }
        }
        .cur {
          background: skyblue;
        }
      }
    }
  }
}
</style>