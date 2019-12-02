const rp = require('request-promise');
const { CLIENT_ID } = process.env;

export function Authenticate() {
  rp(
    `https://id.twitch.tv/oauth2/authorize?&response_type=token+id_token&client_id=${CLIENT_ID}&redirect_uri=http://localhost:8080/clips/Carbow`
  );
}

export function getClips() {
  var options = {
    uri: 'https://api.twitch.tv/helix/clips',
    qs: {
      broadcaster_id: 132041668
    },
    headers: {
      'Client-ID': 'n145mm58gf4ygyaojt9lsgq8xcgl4u',
      Accept: 'application/vnd.twitchtv.v5+json',
    },
    json: true,
  };
  return rp(options)
}

export function getInfos(user = 'Carbow') {
  const url = `https://api.twitch.tv/helix/users?login=${user}`;
  const options = {
    headers: {
      'Client-ID': 'n145mm58gf4ygyaojt9lsgq8xcgl4u',
      Accept: 'application/vnd.twitchtv.v5+json',
    },
  };
  console.log(options)
  return fetch(url, options)
}