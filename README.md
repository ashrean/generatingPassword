# Password Generator

# Table of Contents
- Description
- Installation Instructions
- GitHub Account
- Contacts
- Images
- Code Snippets
- Resources


# Description
The use of this project is to generate a password using certain parameters. Such as lower to uppercase characters which
then include up to numbers and adding speical characters. The user is given the options to opt out if they dont want to include
those parameters.

# Installtion Instructions
- clone the code into local machine
- create a folder or add to an existing folder (your choice)
- In terminal `git clone` the copied code
- Once completed type `code .` into VS Code

# Github Account
- [GitHub](https://github.com/ashrean)
- [Deployed Link](https://ashrean.github.io/generatingPassword/)

# Images
![alt text](./assets/pics/Screenshot%202023-01-27%20at%2012.01.56%20PM.png)

# Contacts
[Email](sese.ashrean@gmail.com)

[Linkedin](https://www.linkedin.com/in/ashleyrean/)

# Code Snippets
```  if (lowercase === true) {
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
 ```

# Resources
[W3-SCHOOLS](https://www.w3schools.com/)
[MDN-DOCS](https://developer.mozilla.org/en-US/)
