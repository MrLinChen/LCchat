<template>
  <div id="app" :style="{ 'height':clientHeight+'px','width':clientWidth+'px' }">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
export default {
  data() {
    return {
      clientHeight: document.documentElement.clientHeight,
      clientWidth: document.documentElement.clientWidth
    }
  }
}
</script>
<style>
  #app{
    font-size: 14px;
  }
</style>
