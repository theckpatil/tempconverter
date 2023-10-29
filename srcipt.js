const convertTemp = () => {
  const inputTemp = document.getElementById("deg").value;

  const typeSelected = document.getElementById("type");
  const valueTemp = type.options[typeSelected.selectedIndex].value;

  // Celsius to Fahrenheit
  const celToFah = (cel) => {
    let fahrenheit = ((cel * 9) / 5 + 32).toFixed(1);
    return fahrenheit;
  };

  // Fahrenheit to Celsius
  const fahToCel = (fah) => {
    let celsius = (((fah - 32) * 5) / 9).toFixed(1);
    return celsius;
  };
  // Vaididate & Result
  if (inputTemp === null || inputTemp === "" || isNaN(inputTemp)) {
    alert("Please Enter Valid Degree");
    return false;
  } else if (valueTemp == "cel") {
    document.getElementById("result").innerHTML =
      celToFah(inputTemp) + "  &#176;F";
  } else {
    document.getElementById("result").innerHTML =
      fahToCel(inputTemp) + "  &#176;C";
  }
};
