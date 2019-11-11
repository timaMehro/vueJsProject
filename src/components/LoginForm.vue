<template>
  <div class="login-form">
    <h2>Sign in</h2>
    <form action="#" method="post" @submit.prevent="onSubmit" autocomplete="off">
      <input type="email" placeholder="love@josephmark.com.au" v-model="email" required>
      <div class="input-group">
        <input type="password" placeholder="Enter your password..." v-model="password" required>
        <button type="submit">
          <img src="../assets/icons/arrow-right.svg">
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LoginForm',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('auth', [
      'login'
    ]),
    async onSubmit () {
      let success = await this.login({
        email: this.email,
        password: this.password
      })

      if (success) {
        this.$router.push({ name: 'tasks' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 0;
  margin-bottom: 25px;
  font-size: 2.25rem;
  font-weight: bold;
  color: #D9AE4F;
}

input[type=email],
input[type=password] {
  padding: 24px 20px;
  width: 100%;
  font-size: .875rem;
  font-weight: 600;
  letter-spacing: .5px;
  color: #202531;
  background-color: #fff;
  border: none;
  border-radius: 6px;
  box-sizing: border-box;

  &::placholder {
    color: rgba(#202531, .5);
  }
}

button[type=submit] {
  padding: 0;
  background-color: #fff;
  border: none;
  text-align: center;
  cursor: pointer;
  transition: background-color .2s;

  &:hover {
    background-color: #eee;
  }
}

.input-group {
  display: flex;
  align-items: stretch;
  margin-top: 24px;

  input {
    flex: 1 1 auto;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  button {
    flex: 0 0 64px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
}
</style>
