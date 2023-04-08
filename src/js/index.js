import '../css/styles.css';

import debounce from 'lodash.debounce';

import fetchCountries from './fetchCountries';
import onCatchError from './onCatchError';
import resetMarkup from './resetMarkup.js';
import responseHendler from './responseHendler'

const DEBOUNCE_DELAY = 300;

const inputSearchBoxEl = document.querySelector('#search-box');

function handlerInputForm(event) {
  const searchCountries = event.target.value.trim();

  if (searchCountries === '') {
    resetMarkup();
  }

  fetchCountries(searchCountries)
    .then(data => {
      resetMarkup();
      responseHendler(data);
      console.log(data);
    })
    .catch(onCatchError);
}

inputSearchBoxEl.addEventListener(
  'input',
  debounce(handlerInputForm, DEBOUNCE_DELAY)
);


