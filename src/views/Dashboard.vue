<template>
  <div class="dashboard">
    <nav class="nav nav-pills flex-column flex-sm-row">
      <a class="flex-sm-fill text-sm-center nav-link active" href="#">Dashboard</a>
      <a class="flex-sm-fill text-sm-center nav-link" href="#">Télécharger les clips</a>
      <a class="flex-sm-fill text-sm-center nav-link" href="https://www.twitch.tv/manager/clips" target="blank">Twitch account</a>
      <btn class="flex-sm-fill text-sm-center nav-link"
        href="#"
        tabindex="-1"
        aria-disabled="true">Déconnexion</btn>
    </nav>
    <ul class="clips-list">
      <li v-for="(clip, index) in clips" :key="index">
        <div class="clip-item">
          <h4>{{clip.title}}</h4>
          <p>
            <span>Créé le {{formatDate(clip.created_at)}}</span> - Views
            <span>{{clip.view_count}}</span></p>
          <header>
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
          </header>
          <main>
            <p>
              <span class="badge badge-primary">{{clip.creator_name}}</span> a clipé pour
              <span class="badge badge-primary">{{clip.broadcaster_name}}</span></p>
          </main>
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
    formatDate(createdAt) {
      const event = new Date(createdAt);
      return event.toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
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
iframe {
  box-shadow: #000000 0px 4px 15px;
  margin: 1em 0;
}
.dashboard {
  background-color: #0e0e10;
  color: white;
}
.clips-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.clip-item {
  margin: 3em 0;
}
pre {
  background-color: gray;
  color: white;
}
li {
  list-style: none;
  padding: 1em;
}
ul {
  display: flex;
  flex-wrap: wrap;
}
</style>
