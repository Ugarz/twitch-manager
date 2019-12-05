<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Welcome {{ $route.params.name }} !</h1>
      <p class="lead">The dashboard allows you to list and download your clips from
        Twitch in an easy way.</p>
      <router-link to="/">Go Home</router-link>
    </div>
    <ClipsList :clips="user" />
  </div>
</template>

<script>
import ClipsList from '../components/ClipsList.vue';
import { getInfos } from '../helpers/twitch';

export default {
  components: {
    ClipsList,
  },
  data() {
    return {
      show: false,
      user: {},
    };
  },
  methods: {
    goHome() {
      this.$router.push({ name: 'home' });
    },
  },
  mounted() {
    this.user = getInfos();
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/settings.scss';
@import '../styles/animations/slide.scss';

a {
  border: $secondary 2px solid;
  padding: .5em 1em;
  margin: 1em;
  border-radius: .5em;
  text-decoration: none;
  color: $secondary;
}
a:hover {
  border: $orange 2px solid;
  color: $orange;
}

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
