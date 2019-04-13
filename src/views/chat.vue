<template>
    <div style="width: ">
      <div>
        <div ref="header" class="header">
          <mt-header title="张三">
            <router-link to="/index" slot="left">
              <mt-button icon="back"></mt-button>
            </router-link>
          </mt-header>
        </div>

        <div id="scroll" class="index_container" :style="{ 'height': containerHeight + 'px' }">
        </div>

        <div ref="bottom" class="bottom">
          输入框。。。。。
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'char',
  data() {
    return {
      clientHeight: document.documentElement.clientHeight, // 页面高度
      containerHeight: 0 // 内容体高度
    }
  },
  created() {
    this.computeHeight()
  },
  methods: {
    computeHeight() {
      console.log(this.$refs.header)
      let headerHeight = this.$refs.header.children[0].clientHeight
      let bottomHeight = this.$refs.bottom.children[0].clientHeight
      this.containerHeight = this.clientHeight - headerHeight - bottomHeight
    }
  }
}
</script>

<style scoped>

</style>
