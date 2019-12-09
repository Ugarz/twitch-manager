import rp from 'request-promise';
import IdTokenVerifier from 'idtoken-verifier';

const { VUE_APP_CLIENT_ID, VUE_APP_TWITCH_USER } = process.env;

export function JWTdecrypt(jwt) {
  const verifier = new IdTokenVerifier({
    issuer: 'Twitch',
    audience: jwt,
  });

  verifier.verify(id_token, nonce, (error, payload) => {
    if (error) {
      // handle the error

    }
    console.log('id_token', id_token);
    console.log('nonce', nonce);
    console.log('JWT Payload', payload);
    // do something with `payload`
  });
}

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
