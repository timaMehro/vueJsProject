<template>
  <div class="auth">
    <div class="container">
      <welcome class="welcome" />
      <login-form class="login-form" />
    </div>
  </div>
</template>

<script>
import Welcome from '../components/Welcome'
import LoginForm from '../components/LoginForm'

export default {
  name: 'Auth',
  components: {
    Welcome,
    LoginForm
  }
}
</script>

<style lang="scss" scoped>
.auth {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-color: #202531;
  color: #fff;
}

.container {
  display: flex;
  align-items: flex-end;
  margin: 0 auto;
  padding: 60px 30px;
  width: 1180px;
  max-width: 100%;
  box-sizing: border-box;
}

.welcome {
  flex: 0 1 50%;
}

.login-form {
  flex: 0 1 330px;
  margin-left: auto;
  margin-right: auto;
}
</style>
