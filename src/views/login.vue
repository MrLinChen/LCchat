<template>
    <div>
      <div class="login">
        <mt-field label="用户名" placeholder="请输入用户名"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
        <mt-button>登录</mt-button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style scoped>
.mint-field{
  border-top: none red 1px;
}
</style>
