import rp from 'request-promise';
import r from 'request';

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
  return rp(options);
}

export function getAllClips(broadcasterId) {
  console.log('Fetching clips for', broadcasterId);
  const options = {
    url: 'https://api.twitch.tv/helix/clips',
    qs: {
      broadcaster_id: broadcasterId,
    },
    headers: {
      'Client-ID': VUE_APP_CLIENT_ID,
    },
  };
  return rp(options)
    .then((clips) => {
      console.log('Clips found !', clips);
      console.log('Data found !', clips.data);
      return clips.data;
    })
    .catch((error) => console.log('Whoops error while fetching', error));
}

export function getAllClipsNoPromise(broadcasterId) {
  console.log('Fetching clips for', broadcasterId);

  const options = {
    url: `https://api.twitch.tv/helix/clips?broadcaster_id=${broadcasterId}`,
    headers: {
      'Client-ID': VUE_APP_CLIENT_ID,
    },
  };

  function callback(error, response, clips) {
    if (!error && response.statusCode === 200) {
      console.log('clipsssss', clips.data[0].id);
      // const clips = JSON.parse(body);
      return clips.data;
    }
    throw new Error('Error while fetching clips');
  }

  return r(options, callback);
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
