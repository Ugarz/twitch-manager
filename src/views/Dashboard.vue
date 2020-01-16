<template>
  <div>
    <router-link to="/">Go Home</router-link>
    <ul>
      <li v-for="(clip, index) in clips" :key="index">
        <div>
          <h3>{{clip.title}}</h3>
          <!-- <img :src="clip.thumbnail_url" :alt="clip.title"> -->
          <object bgcolor="#000000" data="http://www.twitch.tv/widgets/archive_embed_player.swf" height="378" id="clip_embed_player_flash" type="application/x-shockwave-flash" width="620">
            <param name="movie" value="http://www.twitch.tv/widgets/archive_embed_player.swf" />
            <param name="allowScriptAccess" value="always" />
            <param name="allowNetworking" value="all" />
            <param name="allowFullScreen" value="true" />
            <param name="flashvars"
              value="channel=twitch
                &amp;auto_play=false
                &amp;start_volume=25
                &amp;videoId=c5894318
                &amp;device_id=SLJemBs" />
          </object>
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
