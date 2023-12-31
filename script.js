// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = 0;
var includeLowercase = false;
var includeUppercase = false;
var includeNumbers = false;
var includeSpecialCharacters = false;

// Generate a random Character from a character set
function getRandomCharacter(charSet) {
  const randomIndex = Math.floor(Math.random() * charSet.length);
  return charSet.charAt(randomIndex);
}

// Generate password
function generatePassword(length, useLowercase, useUppercase, useNumbers, useSpecialCharacters) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/\\";
  
  let charSet = "";

  // Collect password criteria
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
        var generatedPassword = "";

        if (includeLowercase) {
          charSet += lowercaseChars;
        }
  
        if (includeUppercase) {
          charSet += uppercaseChars;
        }
  
        if (includeNumbers) {
          charSet += numberChars;
        }
  
        if (includeSpecialCharacters) {
          charSet += specialChars;
        }
  
        for (let i = 0; i < passwordLength; i++) {
          generatedPassword += getRandomCharacter(charSet);
        }
        return generatedPassword;
        
      }
    }
  } else {
    alert("Password generation canceled.");
  }
}







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




