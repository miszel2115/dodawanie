function dodawanie() {
  var number1 = parseInt(document.getElementById('inputNumber1').value);
  var number2 = parseInt(document.getElementById('inputNumber2').value);
  var result = number1 + number2;
  document.getElementById('result').innerText = "Wynik dodawania to: " + result;
}
