<template>
  <header class="page-header">
    <div class="container">
      <h1>{{ title }}</h1>
      <profile-button @click="profileMenuActive = !profileMenuActive" />
      <profile-menu
        class="profile-menu"
        :active="profileMenuActive"
      />
    </div>
  </header>
</template>

<script>
import ProfileButton from './ProfileButton'
import ProfileMenu from './ProfileMenu'

export default {
  name: 'PageHeader',
  props: {
    title: String
  },
  data () {
    return {
      profileMenuActive: false
    }
  },
  components: {
    ProfileButton,
    ProfileMenu
  }
}
</script>

<style lang="scss" scoped>
.page-header {
  background-color: #fff;
}

.container {
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 50px 30px;
  width: 1340px;
  max-width: 100%;
  box-sizing: border-box;
}

h1 {
  margin: 0;
  margin-right: auto;
  font-size: 2.25rem;
  font-weight: 600;
}

.profile-menu {
  position: absolute;
  top: calc(100% - 30px);
  right: 30px;
}
</style>
