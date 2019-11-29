<template>
  <div>
    <p>Cheh à toi {{ $route.params.name }} !</p>
    <button
      @click="goHome"
      type="button"
      class="btn btn-secondary">Home</button>
    <div id="example-1">
      <button
        @click="show = !show;"
        type="button"
        class="btn btn-secondary">Toggle message !</button>
      <transition name="slide-fade">
        <p v-if="show">hello</p>
      </transition>
    </div>
  </div>
</template>

<script>
import router from '../router/index';

export default {
  data(){
    return {
      show: false
    }
  },
  methods: {
    goHome() {
      router.push({name: 'home'});
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/settings.scss';
@import '../styles/animations/slide.scss';

div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: $primary;
  color: white;
  height: 100vh;
}
</style>