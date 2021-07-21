<template>
  <div class="home jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="title display-4">TaMèreEnClip!</h1>
      <p class="lead">Parce qu'elle ne sera pas toujours là pour laver tes clips!</p>
      <a :href="authUrl">Connexion</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['env'],
  data() {
    return {
      authUrl: `https://id.twitch.tv/oauth2/authorize?client_id=${this.env.VUE_APP_CLIENT_ID}&redirect_uri=${this.env.VUE_APP_URI_REDIRECTION}&response_type=token+id_token&scope=clips:edit%20openid&claims={"id_token":{"email":null,"email_verified":null,"preferred_username":null},"userinfo":{"picture":null}}`,
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

@import url('https://fonts.googleapis.com/css?family=Bangers&display=swap');
@import url('https://fonts.googleapis.com/css?family=Bangers|Open+Sans&display=swap');

.home {
  font-family: 'Open Sans', sans-serif;
  font-size: 1em;
}
.title {
  font-family: 'Bangers', cursive;
  font-size: 4em;
}
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
