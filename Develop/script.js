// Assignment code here
//character length
var charlength = Number(prompt("How many characters will your password be? Enter a number between 8 and 128"));

//character type
var upperChar = confirm("would you like upper case?");
var numberChar = confirm("would you like numbers?");
var specialChar = confirm("would you like special characters?")

//generate character codes


// build password
function buildPassword (charlength, upperChar, numberChar, specialChar){

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
