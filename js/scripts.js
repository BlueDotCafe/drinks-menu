$(document).ready(function() {
  var age = parseFloat(prompt("How old are you?"));

  if (age > 21) {
    $("#drinks").show();
  } else if (age === 21) {
    alert("Liquor before beer, you're in the clear.");
    $("#drinks").show();
  } else {
    $("#under-21").show();
  }
});
