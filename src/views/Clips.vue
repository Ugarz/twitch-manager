<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Welcome {{ $route.params.name }} !</h1>
      <p class="lead">The dashboard allows you to list and download your clips from Twitch in an easy way.</p>
      <button
        @click="goHome"
        type="button"
        class="btn btn-secondary">Home</button>
    </div>
    <ClipsList :clips="user" />
  </div>
</template>

<script>
import router from '../router/index';
import ClipsList from '../components/ClipsList.vue';
import { getInfos } from '../helpers/twitch';

export default {
  components: {
    ClipsList,
  },
  data(){
    return {
      show: false,
      user: {}
    }
  },
  methods: {
    goHome() {
      router.push({ name: 'home' });
    }
  },
  mounted () {
    this.user = getInfos();
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