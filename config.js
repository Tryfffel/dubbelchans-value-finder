// config.js - Hanterar API-nycklar via localStorage
// VARNING: Lägg ALDRIG riktiga nycklar direkt i denna fil om den versionshanteras.
// Använd inställningspanelen i appen istället — nycklarna sparas i localStorage.

const Config = {
  get oddsApiKey() {
    return localStorage.getItem('oddsApiKey') || '';
  },
  get footballApiKey() {
    return localStorage.getItem('footballApiKey') || '';
  },
  set oddsApiKey(key) {
    localStorage.setItem('oddsApiKey', key);
  },
  set footballApiKey(key) {
    localStorage.setItem('footballApiKey', key);
  },
  hasKeys() {
    return this.oddsApiKey.length > 0;
  }
};

export default Config;
