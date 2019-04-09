<template>
    <div>
      <div class="avatar">
        <div class="avatar-image">
          <img src="../assets/logo.png"/>
        </div>
      </div>
      <div class="login">
        <mu-form ref="loginForm" :model="loginForm" class="mu-demo-form">
          <mu-form-item label="账号:" prop="account" label-position="left" :rules="accountRule">
            <mu-text-field v-model="loginForm.account"></mu-text-field>
          </mu-form-item>
          <mu-form-item label="密码:" prop="password" label-position="left" :rules="passwordRule">
            <mu-text-field v-model="loginForm.password" type="password"></mu-text-field>
          </mu-form-item>
        </mu-form>
        <mt-button size="small" type="primary" style="width: 100%" @click="handleSubmit">登录</mt-button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        account: '',
        password: ''
      },
      accountRule: [
        { validate: (val) => !!val, message: '账号不能为空' }
      ],
      passwordRule: [
        { validate: (val) => !!val, message: '密码不能为空' }
      ]
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.loginForm.validate().then(result => {
        console.log(result)
        this.$router.push({ path: '/index' })
      })
    }
  }
}
</script>

<style scoped>
.login{
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 5%;
}
.avatar{
  margin-top: 30%;
}
.avatar-image{
  width: 60px;
  height: 60px;
  margin-right: auto;
  margin-left: auto;
}
.avatar-image img{
  width: 60px;
  height: 60px;
}
</style>
