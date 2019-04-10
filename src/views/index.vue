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
            <new v-if="selected == title[0]" />
          </mt-tab-container-item>
          <mt-tab-container-item :id=title[1]>
            <relation-people v-if="selected == title[1]" />
          </mt-tab-container-item>
          <mt-tab-container-item :id=title[2]>
            <explore v-if="selected == title[2]"/>
          </mt-tab-container-item>
          <mt-tab-container-item :id="title[3]">
            <my-center v-if="selected == title[3]" />
          </mt-tab-container-item>
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
      containerHeight: 0,
      scroll: null
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
          click: true
        })
      }
      this.scroll.on('touchend', (pos) => {
        console.log(pos)
        if (pos.y > 50) {
          console.log('下拉加载......')
        }
      })
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
