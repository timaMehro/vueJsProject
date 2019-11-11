<template>
  <transition>
    <nav v-if="active">
      <button @click="onLogout">Logout</button>
    </nav>
  </transition>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ProfileMenu',
  props: {
    active: Boolean
  },
  methods: {
    ...mapActions('auth', [
      'logout'
    ]),
    async onLogout () {
      let success = await this.logout()

      if (success) {
        this.$router.push({ name: 'auth' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  align-items: stretch;
  flex-direction: column;
  min-width: 200px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 12px 12px 24px rgba(#000, .15);

  &.v-enter-active,
  &.v-leave-active {
    transition: opacity .1s;
  }

  &.v-enter,
  &.v-leave-to {
    opacity: 0;
  }
}

button {
  padding: 20px;
  text-align: center;
  background: transparent;
  border: none;
  font-size: .75rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  opacity: .9;
  cursor: pointer;
  transition: opacity .2s;

  &:hover {
    opacity: 1;
  }
}
</style>
