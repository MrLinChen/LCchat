<template>
  <div>
    <mu-paper>
      <mu-container ref="container">
        <mu-load-more>
          <mu-list>
            <template v-for="i in num" >
              <!--eslint-disable-next-line-->
              <mu-list-item >
                <div style="width: 100%;" @click="toChatPage">
                  <div style="display: inline-block;padding-top: 5px;">
                    <mu-avatar size="45">
                      <img src="../../assets/logo.png">
                    </mu-avatar>
                  </div>
                  <div style="display: inline-block;margin-left: 10px; vertical-align:top;height: 55px;">
                    <span style="display: block;margin-top: 2px;">标题</span>
                    <span style="display:block;margin-top: 5px;">内容: ...{{i}}</span>
                  </div>
                  <div style="display: inline-block;float: right;height: 55px;">
                    <span style="margin-top: 10px;display: block">2019-04-18</span>
                    <span style="float: right">
                      <mt-badge size="small" type="error" style="border-radius: 20px;">10</mt-badge>
                    </span>
                  </div>
                </div>
              </mu-list-item>
              <!--eslint-disable-next-line-->
              <mu-divider />
            </template>
          </mu-list>
        </mu-load-more>
      </mu-container>
    </mu-paper>
  </div>
</template>

<script>
export default {
  name: 'New',
  data () {
    return {
      num: 10,
      refreshing: false,
      loading: false,
      text: 'List'
    }
  },
  methods: {
    loadingData() {
      this.num += 10
    },
    refresh () {
      this.refreshing = true
      this.$refs.container.scrollTop = 0
      setTimeout(() => {
        this.refreshing = false
        this.text = this.text === 'List' ? 'Menu' : 'List'
        this.num = 10
      }, 2000)
    },
    load () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.num += 10
      }, 2000)
    },
    toChatPage() {
      console.log(999999)
      this.$router.push({ path: '/chat' })
    }
  }
}
</script>

<style>
.mu-item{
  height: auto;
  padding: 0px 10px;
}
</style>
