// Assignment code here
//character length
var charlength = Number(prompt("How many characters will your password be? Enter a number between 8 and 128"));

//character type
var upperChar = confirm("would you like upper case?");
var numberChar = confirm("would you like numbers?");
var specialChar = confirm("would you like special characters?")

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

// build password
function buildPassword (charlength, upperChar, numberChar, specialChar){
  let characters = lower
  if (upperChar) characters = characters.concat(upper)
  if (specialChar) characters = characters.concat(symbols)
  if (numberChar) characters = characters.concat(numbers)

  var passwordCharacters = []
  for (let i = 0; i< charlength; i++) {
    var characterCode = characters[Math.floor(math.random() * characters.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join("")
}

//loop through character codes 
function lowToHigh(low, high) {
  var array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

//show password


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
