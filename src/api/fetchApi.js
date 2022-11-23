import config from '../config/config.json';

export const getAllCountries = () => {
  return fetch(`${config.API_URL}/all`)
    .then((response) => response.json())
    .catch((err) => {
      return {
        error: err,
      };
    });
};
