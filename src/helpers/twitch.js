const rp = require('request-promise');

const { VUE_APP_CLIENT_ID, VUE_APP_TWITCH_USER } = process.env;

// eslint-disable-next-line import/prefer-default-export
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

export function getUserInfos(accessToken) {
  const options = {
    url: 'https://id.twitch.tv/oauth2/userinfo',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return rp(options)
    .catch((error) => console.log(error));
}

export function getAllClips(broadcasterId) {
  const options = {
    url: 'https://api.twitch.tv/helix/clips',
    qs: {
      broadcaster_id: broadcasterId,
    },
    headers: {},
  };
  return rp(options);
}

export function getClip(broadcasterId, clipId) {
  const options = {
    url: 'https://api.twitch.tv/helix/clips',
    qs: {
      broadcaster_id: broadcasterId,
      id: clipId,
    },
    headers: {
      'Client-ID': VUE_APP_CLIENT_ID,
    },
  };
  return rp(options);
}
