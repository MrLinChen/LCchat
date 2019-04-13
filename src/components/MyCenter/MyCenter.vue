<template>
  <div>
    <div>
      <mt-cell icon="back" title="朋友圈" value="带 icon"></mt-cell>
      <mt-cell title="标题文字" is-link value="带链接"></mt-cell>
      <mt-cell icon="back" title="扫一扫" value="带 icon"></mt-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyCenter',
  created() {
    console.log('个人中心')
  }
}
</script>

<style scoped>

</style>
