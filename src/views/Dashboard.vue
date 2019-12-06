<template>
  <div>
    <p>
      access_token:
      <pre>{{ access_token }}</pre>
    </p>
    <p>
      id_token:
      <pre>{{ id_token }}</pre>
    </p>
    <p>
      scope:
      <pre>{{ scope }}</pre>
    </p>
    <p>
      token_type:
      <pre>{{ token_type }}</pre>
    </p>
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
      setAuthInfo: 'setAuthInfo',
      getUserInfos: 'getUserInfos',
    }),
  },
  computed: {
    access_token() {
      return this.twitchHash.split('&')[0].replace('#access_token=', '');
    },
    id_token() {
      return this.twitchHash.split('&')[1].replace('id_token=', '');
    },
    scope() {
      return this.twitchHash.split('&')[2].replace('scope=', '');
    },
    token_type() {
      return this.twitchHash.split('&')[3].replace('token_type=', '');
    },
  },
  mounted() {
    console.log(this.twitchHash);
    this.setAuthInfo({
      access_token: this.access_token,
      id_token: this.id_token,
      scope: this.scope,
      token_type: this.token_type,
    });
  },
};
</script>

<style lang="scss" scoped>
pre {
  background-color: gray;
  color: white;
}
</style>
