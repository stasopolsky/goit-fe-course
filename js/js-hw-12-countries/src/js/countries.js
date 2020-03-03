import debounce from "lodash.debounce";
import countriesService from "../js/countries-service";

const searchInput = document
  .querySelector(".search_input")
  .addEventListener("input", debounce(searchInputSubmitHandler, 500));

const countryItems = document.querySelector(".country_items");

function searchInputSubmitHandler(e) {
  const searchQuery = e.target.value;

  countriesService
    .fetchCountries(searchQuery)
    .then(data => {
      // console.log('data', data);
      if (data.length > 1 && data.length <= 10) {
        return data.reduce((acc, item) => {
          acc = acc + `<li>${item.name}</li>`;
          return (countryItems.innerHTML = acc);
        }, "");
      } else if (data.length === 1) {
        return data.reduce((acc, item) => {
          acc += `<h2>${item.name}</h2>
          <div class="body">
          <div class="info">
          <p><span class="span">Столица: </span>${item.capital}</p>
          <p><span class="span">Население: </span>${item.population} человек</p>
          <p><span class="span">Площадь: </span>${item.area} кв. км.</p>
          </div>
          <img src="${item.flag}" alt="Flag">
          </div>`;

          return (countryItems.innerHTML = acc);
        }, "");
      } else {
        alert("Пожалуйста, введите более точный запрос.");

        return (document.querySelector(".search_input").value = "");
      }
    })
    .catch(error => console.log(error));
}
