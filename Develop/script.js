// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = 0;
var includeLowercase = false;
var includeUppercase = false;
var includeNumbers = false;
var includeSpecialCharacters = false;


function getPasswordCriteria() {
  var password = prompt("Please choose a desired length for your password between 8 and 124 characters.");

  if (password !== null) {
    passwordLength = parseInt(password);

    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Invalid password length. Please enter a number between 8 and 128.");
    } else {
      includeLowercase = confirm("Include lowercase letters in your password?");
      includeUppercase = confirm("Include uppercase letters in your password?");
      includeNumbers = confirm("Include numbers in your password?");
      includeSpecialCharacters = confirm("Include special characters in your password?");
      if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialCharacters) {
        alert("You must select at least one character type to include.");
      } else {
        alert("Password criteria collected. Generating password...");
        var generatedPassword = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSpecialCharacters);
        alert("Generated password: " + generatedPassword);
      }
    }
  } else {
    alert("Password generation canceled.");
  }
}

// Generate a random Character
function getRandomCharacter(charSet) {
  const randomIndex = Math.floor(Math.random() * charSet.length);
  return charSet.charAt(randomIndex);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
