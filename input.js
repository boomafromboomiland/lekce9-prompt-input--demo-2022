// funkcia pre výpočet BMI = (weight) / (height * height)
function vypocitajBMI() {
  let vyskaMetry = parseFloat(document.querySelector('input[name=vyska]').value / 100); //z tohto dostaneme textový reťazec --> pridáme parseFloat
  let vahaKilogramy = parseFloat(document.querySelector('input[name=vaha]').value); //z tohto dostaneme textový reťazec --> pridáme parseFloat
  return BMI = Math.round(vahaKilogramy / Math.pow(vyskaMetry, 2)); //výpočet BMI, nič sa nestane, nemá čo funckiu zavolať
  //vypisBMI(BMI);
};

// funckia pre zapísanie BMI do User Interface (UI)
function vypisBMI(BMI) {
  document.querySelector('#vysledok > span').innerHTML = BMI;
};

// refactoring výpisu BMI
function vypocitajVypisBMI() {
  let BMI = vypocitajBMI();
  vypisBMI(BMI);
};

// zavolanie výpočet BMI
document.querySelectorAll('input').forEach((element) => {
  element.addEventListener('change', vypocitajVypisBMI);
});
