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
            <param name="flashvars" value="channel=twitch&amp;auto_play=false&amp;start_volume=25&amp;videoId=c5894318&amp;device_id=SLJemBs" />
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
import { getAllClipsNoPromise } from '../helpers/twitch';

export default {
  props: ['env'],
  data() {
    return {
      twitchHash: document.location.hash,
      clips: [
        {
          id: 'TawdryAthleticBeefTooSpicy',
          url: 'https://clips.twitch.tv/TawdryAthleticBeefTooSpicy',
          embed_url: 'https://clips.twitch.tv/embed?clip=TawdryAthleticBeefTooSpicy',
          broadcaster_id: '132041668',
          broadcaster_name: 'Carbow',
          creator_id: '125699727',
          creator_name: 'PtitFonsde',
          video_id: '516668179',
          game_id: '488552',
          language: 'fr',
          title: "Je t'ai vu pharah !",
          view_count: 9,
          created_at: '2019-12-03T21:43:07Z',
          thumbnail_url: 'https://clips-media-assets2.twitch.tv/AT-cm%7C578676682-preview-480x272.jpg',
        },
        {
          id: 'AntediluvianGoodSlothKappaPride',
          url: 'https://clips.twitch.tv/AntediluvianGoodSlothKappaPride',
          embed_url: 'https://clips.twitch.tv/embed?clip=AntediluvianGoodSlothKappaPride',
          broadcaster_id: '132041668',
          broadcaster_name: 'Carbow',
          creator_id: '117238362',
          creator_name: 'machja2a',
          video_id: '',
          game_id: '488552',
          language: 'fr',
          title: "[FR/EN] Let's rank",
          view_count: 9,
          created_at: '2019-09-23T20:03:58Z',
          thumbnail_url: 'https://clips-media-assets2.twitch.tv/35758059280-offset-4442-preview-480x272.jpg',
        },
        {
          id: 'MoldySillyCrowPermaSmug',
          url: 'https://clips.twitch.tv/MoldySillyCrowPermaSmug',
          embed_url: 'https://clips.twitch.tv/embed?clip=MoldySillyCrowPermaSmug',
          broadcaster_id: '132041668',
          broadcaster_name: 'Carbow',
          creator_id: '125699727',
          creator_name: 'PtitFonsde',
          video_id: '516668179',
          game_id: '488552',
          language: 'fr',
          title: "[FR/EN] On va pousser l'alt pour atteindre le niveau 25 !",
          view_count: 4,
          created_at: '2019-12-03T22:16:52Z',
          thumbnail_url: 'https://clips-media-assets2.twitch.tv/258110113-offset-6352-preview-480x272.jpg',
        },
      ],
    };
  },
  methods: {
    ...mapActions({
      setAuthInfo: 'setAuthInfo',
      getUserInfos: 'getUserInfos',
    }),
    async updateClips() {
      const broadcasterId = fetchKey('sub');
      getAllClipsNoPromise(broadcasterId)
        .then((clips) => {
          this.clips = clips;
          console.log('clipeuh', clips);
        });
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
