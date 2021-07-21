// eslint-disable-next-line import/prefer-default-export
export function setCookie(name, value, days) {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = `; expires=${date.toUTCString()}`;
  }
  console.log(`${name}=${value || ''}${expires}; path=/`);
  document.cookie = `${name}=${value || ''}${expires}; path=/`;
}
