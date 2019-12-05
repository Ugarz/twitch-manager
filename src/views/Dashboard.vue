<template>
  <div>
    {{ twitchHash }}
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['env'],
  data() {
    return {
      twitchHash: document.location.hash,
    };
  },
  methods: {
    ...mapActions({
      setAccessToken: 'setAccessToken',
    }),
  },
  computed: {
    access_token() {
      return this.twitchHash.split('&')[0].replace('#access_token=', '');
    },
    scope() {
      return this.twitchHash.split('&')[1].replace('scope=', '');
    },
    token_type() {
      return this.twitchHash.split('&')[2].replace('token_type=', '');
    },
  },
  mounted() {
    console.log(this.twitchHash);
    this.setAccessToken({
      access_token: this.access_token,
      scope: this.scope,
      token_type: this.token_type,
    });
  },
};
</script>
