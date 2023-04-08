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
      'Too many matches found. Please enter a more specific name.'
    );
    return;
  }
}

function createCountryList(countries) {
  const countryListMarkup = ({ flags, name }) => {
    console.log({ flags, name });
    return `<li class="country-list-item">
            <img src="${flags.svg}" alt="${flags.alt}" width="40" height="25">
            <p class="text-list" >${name.official}</p>
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
      <div class="country-info-wrapper">
     <img class="country-img" src="${flags.svg}" alt="${
      flags.alt
    }" width="150" height="100">
    <h2 class="country-title">${name.official}</h2>
    <ul>
        <li class="country-info-list-item"> <p> Capital: </p> <p class="text-list-item">${capital}</p></li>
        <li class="country-info-list-item"> <p> Population: </p> <p class="text-list-item">${population}</p></li>
        <li class="country-info-list-item"> <p> Languages:</p> <p class="text-list-item">${Object.values(
          languages
        )}</p></li>
    </ul>
    </div>`;
  };

  const createCardMarkup = countries.map(createCountryCard);
  countryInfoEl.innerHTML = createCardMarkup;
}
