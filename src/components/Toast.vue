<template>
  <div class="toast" v-if="toast" :class="toast.type">
    <strong>{{ toast.message }}</strong>
  </div>
</template>

<script>
export default {
  name: "Toast",
  computed: {
    toast() {
      return this.$store.state.toast;
    },
  },
};
</script>

<style lang="scss">
.toast {
  position: absolute;
  top: 20px;
  min-width: 200px;
  color: white;
  right: 20px;
  padding: 10px;
  border-radius: 3px;
  animation: slidein 0.3s, blur 0.3s 2s forwards;
  &.success {
    background-color: #42b983;
  }
  &.error {
    background-color: #f66;
  }
}

@keyframes slidein {
  from {
    visibility: hidden;
    right: -300px;
  }
  to {
    visibility: visible;
    right: 20px;
  }
}

@keyframes blur {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
