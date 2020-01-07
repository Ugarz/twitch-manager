/* eslint-disable no-restricted-syntax */
import jwt from 'jsonwebtoken';

const extractId = (idToken) => ({
  access_token: idToken.split('&')[0].replace('#access_token=', ''),
  id_token: idToken.split('&')[1].replace('id_token=', ''),
  scope: idToken.split('&')[2].replace('scope=', ''),
  token_type: idToken.split('&')[3].replace('token_type=', ''),
});

// Save data to sessionStorage
export const storeKey = (key, value) => {
  if (key === 'twitch_key') {
    const identity = extractId(value);
    const decoded = jwt.decode(identity.id_token);

    if (decoded && decoded.aud) {
      // eslint-disable-next-line guard-for-in
      for (const p in decoded) {
        sessionStorage.setItem(p, decoded[p]);
      }
    }
  }
  return sessionStorage.setItem(key, value);
};

// Get saved data from sessionStorage
export const fetchKey = (key) => sessionStorage.getItem(key);

// Remove saved data from sessionStorage
export const removeKey = (key) => sessionStorage.removeItem(key);

// Remove all saved data from sessionStorage
export const resetAll = sessionStorage.clear();
