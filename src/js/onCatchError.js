import Notiflix from 'notiflix';
export default function onCatchError() {
    return Notiflix.Notify.failure(
      `❌ Oops, there is no country with that name :(`
    );
  }