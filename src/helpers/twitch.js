const rp = require('request-promise');

export function OAuth(client_id = 'n145mm58gf4ygyaojt9lsgq8xcgl4u') {
  const options = {
    uri: 'https://id.twitch.tv/oauth2/authorize',
    qs: {
      response_type: 'token+id_token',
      redirect_uri: 'http://localhost:8080/clips/Carbow',
      client_id,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
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
      'Client-ID': 'n145mm58gf4ygyaojt9lsgq8xcgl4u',
      Accept: 'application/vnd.twitchtv.v5+json',
    },
    json: true,
  };
  return rp(options);
}

export function getInfos(user = 'Carbow') {
  const url = `https://api.twitch.tv/helix/users?login=${user}`;
  const options = {
    headers: {
      'Client-ID': 'n145mm58gf4ygyaojt9lsgq8xcgl4u',
      Accept: 'application/vnd.twitchtv.v5+json',
    },
  };
  return fetch(url, options);
}
