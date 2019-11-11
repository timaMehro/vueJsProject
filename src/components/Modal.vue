<template>
  <div class="modal" @click="onClose">
    <div class="inner" @click.stop>
      <modal-close-button
        class="close-btn"
        @click="onClose"
      />
      <slot />
    </div>
  </div>
</template>

<script>
import ModalCloseButton from './ModalCloseButton'

export default {
  name: 'Modal',
  methods: {
    onClose () {
      this.$router.back()
    }
  },
  components: {
    ModalCloseButton
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: rgba(#202531, .6);
  overflow-y: auto;
}

.inner {
  position: relative;
  margin: 50px auto;
  width: 100%;
  max-width: 920px;
  background-color: #fff;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
