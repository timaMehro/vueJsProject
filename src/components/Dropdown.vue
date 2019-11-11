<template>
  <transition name="dropdown">
    <div v-if="active" class="dropdown" @click.stop>
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    active: Boolean
  },
  methods: {
    onDocumentClick () {
      if (this.active) {
        this.$emit('hide')
      }
    }
  },
  created () {
    this.onDocumentClick = this.onDocumentClick.bind(this)
  },
  mounted () {
    document.addEventListener('click', this.onDocumentClick)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.onDocumentClick)
  }
}
</script>

<style lang="scss" scoped>
.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 180px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 12px 12px 24px rgba(#000, .15);
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity .2s;
}

.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
}
</style>
