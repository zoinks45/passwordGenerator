// Assignment code here
//character length and type declaration
var charlength 
var upperChar 
var numberChar 
var specialChar 
var password
//function for building password
function generatePassword() {
  var charlength = (prompt("how long do you want your password (between 8 and 128"));
  while(charlength < 8 || charlength > 128) {
    var charlength = (prompt("how long do you want your password (between 8 and 128"));
  }
  var upperChar = (confirm("do you want upper case letters?"))
  var numberChar = (confirm("do you want numbers?"))
  var specialChar = (confirm("do you want special characters?"))
  var charCodes = lower
  if (upperChar) charCodes = charCodes.concat(upper)
  if (numberChar) charCodes = charCodes.concat(numbers)
  if (specialChar) charCodes = charCodes.concat(symbols)
  
  //loop through character length 
  var passwordLength = []
  for (let i = 0; i < charlength; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordLength.push(String.fromCharCode(characterCode))
  }
  return passwordLength.join('')

  
}

//generate character codes
var upper = lowToHigh(65, 90)
var lower = lowToHigh(97, 122)
var numbers = lowToHigh(48, 57)
var symbols = lowToHigh(33, 47).concat(
  lowToHigh(58, 64)
).concat(
  lowToHigh(91, 96)
).concat(
  lowToHigh(123, 126)
)


//loop through character codes 
function lowToHigh(low, high) {
  var array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
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
