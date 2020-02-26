const baseUrl = "https://restcountries.eu/rest/v2/";
const endpoint = "name/";

export default {
  fetchCountries(searchQuery) {
    const requestParams = `${endpoint}${searchQuery}`;

    return fetch(baseUrl + requestParams).then(response => response.json());
  }
};
