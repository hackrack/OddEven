function oddEven() {
  var userInput = window.prompt("Please type your number");
  if (!isNaN(userInput) && userInput % 2 === 0) {
    window.alert("Your number is Even");
  } else if (!isNaN(userInput) && userInput % 2 !== 0) {
    window.alert("Your number is Odd");
  } else {
    window.alert("It is not valid number")
  }
}
oddEven();
