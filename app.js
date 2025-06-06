function convert() {
  const celsius = document.getElementById("celsius").value;
  const fahrenheit = (celsius * 9/5) + 32;
  document.getElementById("result").innerText = `${fahrenheit} °F`;
}
