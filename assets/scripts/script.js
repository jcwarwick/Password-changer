// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}

function generatePassword(){
  var passWordLength = prompt ("Enter the desired password length (between 8 and 128 characters):")
  passWordLength = parseInt(passWordLength);

  if (isNaN(passWordLength) || passWordLength < 8 || passWordLength >120){
    alert( 'invalid input, password must be between 8 and 120 characters!')
  }

var includeUppercase = confirm(' include uppercase letters? ');
var includeLowercase = confirm(' include lowercase letters? ');
var includeNumbers = confirm(' include numbers? ');
var includeSpecialChar = confirm(' include special characters?');

var characterSet = "";
var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
var numberChars ='0123456789';
var specialChars = "!@#$%^&*()-=_+[]{}|;':\",./<>?";

if(includeUppercase){
  characterSet += uppercaseChars;
}
if(includeLowercase){
  characterSet += lowercaseChars;
}
if(includeNumbers){
  characterSet += numberChars;
}
if(includeSpecialChar){
  characterSet +=specialChars;
}
if (characterSet === 0){
  alert(" you must select at least one character type ")
}
console.log(characterSet)
var generatedPassword = "";
for (var i = 0; i < passWordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characterSet.length);
    generatedPassword += characterSet[randomIndex];
}
console.log(generatedPassword)
return generatedPassword;
}
// Add event listener to generate button

document.getElementById("generate").addEventListener('click', writePassword);