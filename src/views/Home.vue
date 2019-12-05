<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Twitch Manager</h1>
      <p class="lead">A easier way to manage your clips.</p>
      <transition name="slide">
        <button
          @click="goClipsView"
          type="button"
          class="btn btn-primary">Dashboard</button>
      </transition>
      <a href="https://id.twitch.tv/oauth2/authorize?client_id=n145mm58gf4ygyaojt9lsgq8xcgl4u&redirect_uri=http://localhost:8080/dashboard&response_type=token&scope=clips:edit">Login</a>

    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions({
      Authenticate: 'Authenticate',
    }),
    goClipsView() {
      this.$router.push({ name: 'clips', params: { name: 'Carbow' } });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/settings.scss';
@import '../styles/animations/slide.scss';

a {
  border: $primary 2px solid;
  padding: .5em 1em;
  margin: 1em;
  border-radius: .5em;
  text-decoration: none;
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
  background-color: #0e0e10;
  color: white;
  height: 100vh;
}
</style>
