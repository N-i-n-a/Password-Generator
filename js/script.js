// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

  var charMessage = 'What character lenght should the password be?'
  var passLength = prompt(charMessage);
  if (isNaN(passLength) || passLength < 10 || passLength > 64) {
    alert("Please enter a number in the range of 10-60 characters.");
    passLength = prompt(charMessage);
  }

  var lowerCase = confirm('Would you like to include lowercase characters?');
  var upperCase = confirm('Would you like to include uppercase characters?');
  var numeric = confirm('Would you like to include numeric characters?');
  var special = confirm('Would you like to include special characters?');

  while (!lowerCase || !upperCase || !numeric || !special) {
    alert("You need to choose at least one charecter type (lowercase/ uppercase/ numeric / special)");
    var lowerCase = confirm('Would you like to include lowercase characters?');
    var upperCase = confirm('Would you like to include uppercase characters?');
    var numeric = confirm('Would you like to include numeric characters?');
    var special = confirm('Would you like to include special characters?');
  }
  //create an array with user inuts
}


// Function for getting a random element from an array
function getRandom(arr) {
  var item = arr[Math.floor(Math.random()*arr.length)];

  return item;
}

// Function to generate password with user input
function generatePassword() {
//execute the getPasswordOptions function and collect user inputs from the array
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);