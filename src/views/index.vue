<template>
  <div style="width: 100%;height: 100%">
    <div style="width: 100%;height: 100%">
      <div ref="header" class="header">
        <mt-header title="消息">
          <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
        </mt-header>
      </div>
      <div class="container" :style="{ 'height': containerHeight + 'px' }">
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
          {{selected}}
          <mt-tab-container-item id="1">
            <new v-if="selected == '1'" />
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <relation-people v-if="selected == '2'" />
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
            <explore v-if="selected == '3'"/>
          </mt-tab-container-item>
          <mt-tab-container-item id="4">
            <my-center v-if="selected == '4'" />
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
      <div ref="bottom" class="bottom">
        <mt-tabbar v-model="selected">
          <mt-tab-item id="1">
            <img slot="icon" src="../assets/logo.png">
            消息
          </mt-tab-item>
          <mt-tab-item id="2">
            <img slot="icon" src="../assets/logo.png">
            联系人
          </mt-tab-item>
          <mt-tab-item id="3">
            <img slot="icon" src="../assets/logo.png">
            发现
          </mt-tab-item>
          <mt-tab-item id="4">
            <img slot="icon" src="../assets/logo.png">
            我
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
      selected: '1',
      clientHeight: document.documentElement.clientHeight, // 页面高度
      containerHeight: 0
    }
  },
  watch: {
    clientHeight() {
      this.computeHeight()
    }
  },
  mounted() {
    this.computeHeight()
  },
  methods: {
    computeHeight() {
      console.log(111)
      let headerHeight = this.$refs.header.children[0].clientHeight
      let bottomHeight = this.$refs.bottom.children[0].clientHeight
      this.containerHeight = this.clientHeight - headerHeight - bottomHeight
    }
  }
}
</script>

<style scoped>
.header{

}
</style>
