var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", createPassword);

function generatePassword(){
    // Ask the user for a new password length
    var passLength = prompt("How long do you want your password to be? Please choose between 8-128 characthers.")

    // Confirms the user if they want to include lowercase characters
    var lowerCase = confirm("Would you like to include lowercase characters?")

    // Confirms the user if they want to include uppercase characters
    var upperCase = confirm("Would you like to include upppercase characters?")

    // Confirms the user if they want to include numbers?
    var numChar = confirm("Would you like to include numbers")

    // Confirm  the user if they want to include special characters
    var speicalChar = confirm("Would you like to include special characters?");
}
