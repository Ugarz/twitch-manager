<template>
  <div>
    <router-link to="/">Go Home</router-link>
    <ul>
      <li v-for="(clip, index) in clips" :key="index">
        <div>
          <h3>{{clip.title}}</h3>

          <!-- https://dev.twitch.tv/docs/embed/video-and-clips -->
          <iframe
              :src="formatUrl(clip.url)"
              autoplay="false"
              height="360"
              width="640"
              frameborder="0"
              scrolling="no"
              allowfullscreen="true">
          </iframe>

          <p>Clip réalisé par {{clip.creator_name}} pour {{clip.broadcaster_name}}</p>
          <span>{{clip.view_count}} Views</span>
          <span>Créé le {{clip.created_at}}</span>
        </div>

      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import { storeKey, fetchKey } from '../helpers/session';
import { getAllClips } from '../helpers/twitch';

export default {
  props: ['env'],
  data() {
    return {
      twitchHash: document.location.hash,
      clips: [],
    };
  },
  methods: {
    ...mapActions({
      setAuthInfo: 'setAuthInfo',
      getUserInfos: 'getUserInfos',
    }),
    async updateClips() {
      const broadcasterId = fetchKey('sub');
      this.clips = await getAllClips(broadcasterId);
    },
    formatUrl(url) {
      // https://clips.twitch.tv/embed?clip=IncredulousAbstemiousFennelImGlitch
      // https://clips.twitch.tv/TawdryAthleticBeefTooSpicy
      const code = url.split('.tv/')[1];
      return `https://clips.twitch.tv/embed?clip=${code}&autoplay=false`;
    },
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
    storeKey('twitch_key', this.twitchHash);

    this.setAuthInfo({
      access_token: this.access_token,
      id_token: this.id_token,
      scope: this.scope,
      token_type: this.token_type,
    });

    this.updateClips();
  },
};
</script>

<style lang="scss" scoped>
pre {
  background-color: gray;
  color: white;
}
li {
  list-style: none;
}
</style>
