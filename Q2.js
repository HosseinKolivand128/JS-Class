/*
Question:

Write a JavaScript function called generateRandomPassword that generates a random password. The password should be 8 characters long and can include uppercase letters, lowercase letters, and digits (from 0 to 9).

Your function should:

1- Create a string containing all uppercase letters, lowercase letters, and digits: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".
2- Generate an 8-character password by randomly selecting characters from the above string.
3- Return the generated password.

Example Output:
generateRandomPassword() => 'Ax7pZ9qC'


*instructions*

1- Define the generateRandomPassword function.
2- Inside the function, create a charset variable containing all allowed characters.
3- Use a loop to generate an 8-character password by randomly selecting characters from the charset.
4- Return the generated password.
5- Test your function by calling it and logging the result to the console.
*/

/** @todo WRITE YOUR CODE BELLOW THIS */
const generateRandomPassword = () => {
  const randomchar =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
  let password = [];
  for (let i = 0; i < 8; i++) {
    password.push(randomchar[Math.floor(Math.random() * randomchar.length)]);
  }
  const passwordstr = password.join("");
  return passwordstr;
};
console.log(generateRandomPassword());
