// variables
const result = document.querySelector("#resultado");
const brandSelect = document.querySelector("#marca");
const yearSelect = document.querySelector("#year");
const minSelect = document.querySelector("#minimo");
const maxSelect = document.querySelector("#maximo");
const doorsSelect = document.querySelector("#puertas");
const transmissionSelect = document.querySelector("#transmision");
const colorSelect = document.querySelector("#color");

let dataFilter = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
};

const currentYear = new Date().getFullYear();
const max = currentYear;
const min = currentYear - 10;

callEventListeners();
function callEventListeners() {
  document.addEventListener("DOMContentLoaded", () => {
    showCars(autos);
    fillYears();
  });

  brandSelect.addEventListener("change", (e) => {
    dataFilter.marca = e.target.value;
    filterCars();
  });

  yearSelect.addEventListener("change", (e) => {
    dataFilter.year = parseInt(e.target.value);
    filterCars();
  });

  minSelect.addEventListener("change", (e) => {
    dataFilter.minimo = e.target.value;
    filterCars();
  });

  maxSelect.addEventListener("change", (e) => {
    dataFilter.maximo = e.target.value;
    filterCars();
  });

  doorsSelect.addEventListener("change", (e) => {
    dataFilter.puertas = e.target.value;
    filterCars();
  });

  transmissionSelect.addEventListener("change", (e) => {
    dataFilter.transmision = e.target.value;
    filterCars();
  });

  colorSelect.addEventListener("change", (e) => {
    dataFilter.color = e.target.value;
    filterCars();
  });
}

// funciones

function showCars(autos) {
  cleanHTML();

  if (autos.length === 0) {
    const div = document.createElement("div");
    div.classList.add("alert", "alert-danger");
    div.appendChild(
      document.createTextNode("No hay autos que coincidan con los filtros")
    );
    result.appendChild(div);
  } else {
    autos.forEach((auto) => {
      const { marca, modelo, year, precio, puertas, color, transmision } = auto;
      const carHTML = document.createElement("p");
      carHTML.innerText = `${marca} ${modelo} - ${year} -  ${puertas} Puertas - Transmision: ${transmision} - Color: ${color} Precio: ${precio}`;
      result.appendChild(carHTML);
    });
  }
}

function fillYears() {
  for (let i = max; i >= min; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.innerText = i;
    yearSelect.appendChild(option);
  }
}

function filterCars() {
  const result = autos
    .filter(filterBrand)
    .filter(filterYear)
    .filter(filterMin)
    .filter(filterMax)
    .filter(filterDoors)
    .filter(filterTransmission)
    .filter(filterColor);
  showCars(result);
}

function filterBrand(auto) {
  if (dataFilter.marca !== "") {
    return auto.marca === dataFilter.marca;
  }
  return auto;
}

function filterYear(auto) {
  if (dataFilter.year !== "") {
    return auto.year === dataFilter.year;
  }
  return auto;
}

function filterMin(auto) {
  if (dataFilter.minimo !== "") {
    return auto.precio >= dataFilter.minimo;
  }
  return auto;
}

function filterMax(auto) {
  if (dataFilter.maximo !== "") {
    return auto.precio <= dataFilter.maximo;
  }
  return auto;
}

function filterDoors(auto) {
  if (dataFilter.puertas !== "") {
    return auto.puertas === dataFilter.puertas;
  }
  return auto;
}

function filterTransmission(auto) {
  if (dataFilter.transmision !== "") {
    return auto.transmision === dataFilter.transmision;
  }
  return auto;
}

function filterColor(auto) {
  if (dataFilter.color !== "") {
    return auto.color === dataFilter.color;
  }
  return auto;
}

function cleanHTML() {
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }
}
