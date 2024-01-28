let countries = {
    китай: 100,
    чилі: 250,
    австралія: 170,
    індія: 80,
    ямайка: 120
};
  
let userInput = prompt(`Введіть назву країни для доставки:`);
let country = userInput.toLowerCase();

if (countries.hasOwnProperty(country)) {
    alert(`Доставка в ${userInput} буде коштувати ${countries[country]} кредитів.`);
} else {
    alert(`В вашій країні доставка не доступна.`);
  }
  