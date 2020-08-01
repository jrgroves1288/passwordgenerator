
// Special characters for the function created
var specialCharacters = "!@#$%^&*()";
var generateButton = document.getElementById('generate')
generateButton.addEventListener('click', writePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
