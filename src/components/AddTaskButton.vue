<template>
  <router-link :to="{ name: 'create-task' }">
    <img src="../assets/icons/add-white.svg">
    New Ticket
  </router-link>
</template>

<script>
export default {
  name: 'AddTaskButton'
}
</script>

<style lang="scss" scoped>
a {
  padding: 1rem .875rem;
  background-color: #D9AE4F;
  border-radius: 6px;
  font-size: .75rem;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
}

img {
  margin-right: .125rem;
  vertical-align: middle;
}
</style>
