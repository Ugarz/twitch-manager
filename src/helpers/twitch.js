const rp = require('request-promise');

const { VUE_APP_CLIENT_ID, VUE_APP_TWITCH_USER } = process.env;

export function getUser() {
  const options = {
    uri: 'https://api.twitch.tv/helix/users',
    qs: {
      id: 'token+id_token',
      login: 'http://localhost:8080/clips/Carbow',
    },
    json: true,
  };
  return rp(options);
}

export function getClips() {
  const options = {
    uri: 'https://api.twitch.tv/helix/clips',
    qs: {
      broadcaster_id: 132041668,
    },
    headers: {
      'Client-ID': VUE_APP_CLIENT_ID,
      Accept: 'application/vnd.twitchtv.v5+json',
    },
    json: true,
  };
  return rp(options);
}

export function getInfos(user = VUE_APP_TWITCH_USER) {
  const options = {
    url: `https://api.twitch.tv/helix/users?login=${user}`,
    headers: {
      'Client-ID': VUE_APP_CLIENT_ID,
      Accept: 'application/vnd.twitchtv.v5+json',
    },
  };
  return rp(options);
}
