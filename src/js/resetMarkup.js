const countryListEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');

export default function resetMarkup() {
    countryListEl.innerHTML = '';
    countryInfoEl.innerHTML = '';
  }