<template>
  <div>
    <p>Cheh à toi {{ $route.params.name }} !</p>
    <button
      @click="goHome"
      type="button"
      class="btn btn-secondary">Home</button>
      </div>
</template>

<script>
import router from '../router/index';

export default {
  methods: {
    goHome() {
      router.push({name: 'home'});
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #9147ff;
  color: white;
  height: 100vh;
}
</style>