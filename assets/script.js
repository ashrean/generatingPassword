var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", createPassword);

function generatePassword(){
    // Ask the user for a new password length
    var passLength = prompt("How long do you want your password to be? Please choose between 8-128 characthers.")

    // Confirms the user if they want to include lowercase characters
    var lowerChar = confirm("Would you like to include lowercase characters?");

    // Confirms the user if they want to include uppercase characters
    var upperChar = confirm("Would you like to include upppercase characters?");

    // Confirms the user if they want to include numbers?
    var numChar = confirm("Would you like to include numbers");

    // Confirm  the user if they want to include special characters
    var speicalChar = confirm("Would you like to include special characters?");

    var passwordLength = parseInt(passLength);

    // user choices for creating the new password
    var newPass = "";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbs = "0123456789";
    var special = "!@#$%^&*()_-";

    // If the users input is less than 8 or greater than 128 char the user will
    // alerted that password cannot be generated.
    if (passwordLength < 8 || passwordLength > 128){
        return alert("Password must be between 8 and 128 characters long. Please try again.");
    }

    // varaibles will be created if the confirms come back as true.
    if (lowercase === true) {
        newPass += lowerChar
      };

      if (uppercase === true) {
        newPass += upperChar
      };

      if (numChar === true) {
        newPass += numbs
      };

      if (speicalChar=== true) {
        newPass += special
      };

      if (lowercase === false && uppercase === false && numChar === false && speicalChar == false) {
        return alert("Password must contain at least one character set. Please try again.");
      }

      // Lets the user know that if no selection is made
      // an alert will pop saying to try again.
      var password = "";
      for (var i = 0; i < passwordLength; i++) {
        password += newPass.charAt(Math.floor(Math.random() * newPass.length));
      }


    // new password will be generated to the console and allows
    // createPassword to function.
    console.log(password)
    return password;
}

function createPassword(){
    var password = generatePassword();
    var passwordTxt = document.querySelector("#password");

    passwordTxt.value = password;
}
