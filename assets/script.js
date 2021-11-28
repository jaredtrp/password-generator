// Necessary variables
let passwordLength = '';
let passwordSelection = [];
let passwordResult = [];
let passwordFinal = '';

// Prompt and input user's desired password length
let getPasswordLength = function() {
  passwordLength = prompt("How many characters long would you like your password to be? (8 minimum, 128 maximum)");
  if (passwordLength < 8 || passwordLength > 128 || passwordLength === '' || passwordLength === null) {
    return getPasswordLength();
  }
  // Prevents user from inputting anything other than a number
  if (isNaN(passwordLength)){
    window.alert(
      "You selection must be a number."
    );
    return getPasswordLength();
  }
};

// Confirm and input user's desired character types
let getPasswordSelection = function() {
  let lowercaseConfirm = null;
  let uppercaseConfirm = null;
  let numberConfirm = null;
  let symbolConfirm = null;

  lowercaseConfirm = confirm("Would you like your password to include lowercase letters?")
  if (lowercaseConfirm) {
    passwordSelection += 'abcdefghijklmnopqrstuvwxyz';
  }
   
  uppercaseConfirm = confirm("Would you like your password to include uppercase letters?")
  if (uppercaseConfirm) {
    passwordSelection += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  
  numberConfirm = confirm("Would you like your password to include numbers?")
  if (numberConfirm) {
    passwordSelection += '0123456789';
  }
      
  symbolConfirm = confirm("Would you like your password to include symbols?")
  if (symbolConfirm) {
    passwordSelection += '*;<>()[]{}#$?!^|';
  }

  if (!lowercaseConfirm && !uppercaseConfirm && !numberConfirm && !symbolConfirm) {
    window.alert ("You must select at least one character type.")
    return getPasswordSelection();
  }
};

// Random number generator
function numRandomizer(max) {
  return Math.floor(Math.random() * max);
};

// Converts arrays to a string
var arrayConvertor = function () {
  passwordResult.toString();
  passwordFinal = passwordResult.join("");
};

// Password generator
function generatePassword() {
  getPasswordLength();
  getPasswordSelection();
  for (let i = 0; i < passwordLength; i++) {
    n = numRandomizer(passwordSelection.length);
    passwordResult.push(passwordSelection[n]);
    arrayConvertor();
  }
};
// End of assignment code

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = passwordFinal;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
