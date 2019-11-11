<template>
  <transition name="modal">
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'ModalTransition'
}
</script>

<style lang="scss" scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity .3s;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}
</style>
