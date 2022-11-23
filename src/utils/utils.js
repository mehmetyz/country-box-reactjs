export function searchCountry(keyword, country) {
  const keys = ['name', 'alpha2Code', 'alpha3Code', 'nativeName'];

  for (let key of keys) {
    if (country[key].toLowerCase().includes(keyword.toLowerCase())) {
      return true;
    }
  }

  return false;
}

export function insertDotInBigNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
