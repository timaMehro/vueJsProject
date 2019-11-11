<template>
  <nav class="tabs">
    <tab
      v-for="tab in tabs"
      :key="tab"
      :label="tab"
      :active="tab === activeTab"
      @click="$emit('update', tab)"
    />
  </nav>
</template>

<script>
import Tab from './Tab'

export default {
  name: 'Tabs',
  model: {
    prop: 'activeTab',
    event: 'update'
  },
  props: {
    tabs: Array,
    activeTab: String
  },
  components: {
    Tab
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  align-items: center;
}
</style>
