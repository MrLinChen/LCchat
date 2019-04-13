<template>
  <div style="width: 100%;height: 100%">
    <div style="width: 100%;height: 100%">
      <div ref="header" class="header">
        <mt-header :title="selected">
          <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
        </mt-header>
      </div>
      <div id="scroll" class="index_container" :style="{ 'height': containerHeight + 'px' }">
        <!-- tab-container -->
        <mt-tab-container  v-model="selected">
          <mt-tab-container-item :id="title[0]">
            <div v-show="pullDownRefresh" style="width: 30px;margin-left: auto;margin-right: auto">
              <mt-spinner type="snake" color="#26a2ff"/>
            </div>
            <new @click="index" v-if="selected == title[0]"  ref="load"/>
            <div v-show="pullingUp" color="#26a2ff" style="width: 30px;margin-left: auto;margin-right: auto;margin-bottom: 30px;">
              <mt-spinner type="snake" color="#26a2ff" />
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item :id=title[1]>
            <div v-show="pullDownRefresh" style="width: 30px;margin-left: auto;margin-right: auto">
              <mt-spinner type="snake" color="#26a2ff"/>
            </div>
            <relation-people v-if="selected == title[1]" />
            <div v-show="pullingUp" color="#26a2ff" style="width: 30px;margin-left: auto;margin-right: auto;margin-bottom: 30px;">
              <mt-spinner type="snake" color="#26a2ff" />
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item :id=title[2]>
            <explore v-if="selected == title[2]"/>
          </mt-tab-container-item>
          <mt-tab-container-item :id="title[3]">
            <my-center v-if="selected == title[3]" />
          </mt-tab-container-item>
          <div>记载中。。。。。</div>
        </mt-tab-container>
      </div>
      <div ref="bottom" class="bottom">
        <mt-tabbar v-model="selected">
          <mt-tab-item :id="title[0]">
            <img slot="icon" src="../assets/logo.png">
            {{title[0]}}
          </mt-tab-item>
          <mt-tab-item :id="title[1]">
            <img slot="icon" src="../assets/logo.png">
            {{title[1]}}
          </mt-tab-item>
          <mt-tab-item :id="title[2]">
            <img slot="icon" src="../assets/logo.png">
            {{title[2]}}
          </mt-tab-item>
          <mt-tab-item :id="title[3]">
            <img slot="icon" src="../assets/logo.png">
            {{title[3]}}
          </mt-tab-item>
        </mt-tabbar>
      </div>
    </div>
  </div>
</template>

<script>
import New from '@/components/New/New.vue'
import RelationPeople from '@/components/RelationPeople/RelationPeople.vue'
import Explore from '@/components/Explore/Explore.vue'
import MyCenter from '@/components/MyCenter/MyCenter.vue'
import BScroll from 'better-scroll'

export default {
  name: 'index',
  components: {
    New,
    RelationPeople,
    Explore,
    MyCenter
  },
  data () {
    return {
      title: ['消息', '联系人', '发现', '我'],
      selected: '消息',
      clientHeight: document.documentElement.clientHeight, // 页面高度
      containerHeight: 0, // 内容体高度
      scroll: null,
      pullDownRefresh: false,
      pullingUp: false
    }
  },
  mounted() {
    this.computeHeight()
    this.initBScroll()
  },
  methods: {
    initBScroll() {
      // 初始化BScroll
      if (this.scroll == null) {
        this.scroll = new BScroll('#scroll', {
          scrollY: true,
          click: true,
          pullDownRefresh: {
            threshold: 30, // 刷新时机
            stop: 30
          },
          pullUpLoad: {
            threshold: 30 // 开始加载的时机
          }
        })
        this.scroll.on('pullingDown', () => {
          console.log('下拉刷新......')
          this.pullDownRefresh = true
          setTimeout(() => {
            this.pullDownRefresh = false
            this.scroll.finishPullDown()
          }, 3000)
          this.scroll.refresh()
          // 刷新scroll让它还原到原来的位置
        })
        this.scroll.on('pullingUp', () => {
          console.log('上拉加载......')
          this.pullingUp = true
          setTimeout(() => {
            console.log(this.$refs.load)
            this.$refs.load.loadingData()
            this.pullingUp = false
            this.scroll.finishPullUp()
          }, 3000)
          this.scroll.refresh()
          // this.scroll.finishPullUp() // 刷新scroll让它还原到原来的位置
        })
        // this.scroll.refresh()
      }
    },
    index() {
      console.log(888)
    },
    computeHeight() {
      let headerHeight = this.$refs.header.children[0].clientHeight
      let bottomHeight = this.$refs.bottom.children[0].clientHeight
      this.containerHeight = this.clientHeight - headerHeight - bottomHeight
    }
  }
}
</script>

<style scoped>
.index_container{
  overflow: hidden;
  background: white;
}
</style>
