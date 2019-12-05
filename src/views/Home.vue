<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Twitch Manager</h1>
      <p class="lead">A easier way to manage your clips.</p>
      <a :href="authUrl">Login</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['env'],
  data() {
    return {
      authUrl: `https://id.twitch.tv/oauth2/authorize?client_id=${this.env.VUE_APP_CLIENT_ID}&redirect_uri=${this.env.VUE_APP_URI_REDIRECTION}&response_type=token&scope=clips:edit`,
    };
  },
  methods: {
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
