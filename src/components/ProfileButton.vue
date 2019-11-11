<template>
  <button
    v-if="user"
    class="profile-button"
    @click="$emit('click')"
  >
    <div class="details">
      <p class="name">{{ user.name }}</p>
      <p class="role">{{ user.role }}</p>
    </div>
    <img :src="user.avatar" />
  </button>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ProfileButton',
  computed: {
    ...mapState('auth', [
      'user'
    ])
  }
}
</script>

<style lang="scss" scoped>
.profile-button {
  display: flex;
  align-items: center;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
}

.details {
  margin-right: 22px;
  text-align: right;
}

.name {
  margin: 0;
  font-size: 1.125rem;
}

.role {
  margin: 0;
  margin-top: 4px;
  font-size: .75rem;
  text-transform: uppercase;
  opacity: .5;
}

img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
