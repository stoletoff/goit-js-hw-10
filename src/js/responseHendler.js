import Notiflix from 'notiflix';

const countryListEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');

export default function responseHendler(country) {
    if (country.length >= 2 && country.length <= 10) {
      createCountryList(country);
      return;
    }
    if (country.length === 1) {
      createCountryMarkup(country);
      return;
    }
  
    if (country.length > 10) {
      Notiflix.Notify.info(
        "Too many matches found. Please enter a more specific name."
      );
      return;
    }
  }

  function createCountryList(countries) {
    const countryListMarkup = ({ flags, name }) => {
      console.log({ flags, name });
      return `<li class="country-list-item">
            <img src="${flags.svg}" alt="${flags.alt}" width="40" height="25">
            <p>${name.official}</p>
            </li>`;
    };     
    const createCountryListMarkup = countries.map(countryListMarkup).join('');
    countryListEl.insertAdjacentHTML('afterbegin', createCountryListMarkup);
  }
  function createCountryMarkup(countries) {
    const createCountryCard = ({
      name,
      capital,
      population,
      flags,
      languages,
    }) => {
      return `
     <img class="country-img" src="${flags.svg}" alt="${
        flags.alt
      }" width="150" height="100">
    <h2 class="country-title">${name.official}</h2>
    <ul>
        <li class="country-list-item"> <p class="text-list"> Capital: </p> <p>${capital}</p></li>
        <li class="country-list-item"> <p class="text-list"> Population: </p> <p>${population}</p></li>
        <li class="country-list-item"> <p class="text-list"> Languages:</p> <p>${Object.values(
          languages
        )}</p></li>
    </ul>`;
    };
  
    const createCardMarkup = countries.map(createCountryCard);
    countryInfoEl.innerHTML = createCardMarkup;
  }