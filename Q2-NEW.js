//For having 1 to 3 numbers for sure
const generatePassword = () => {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let password = "";
  for (let i = 0; i < 8; i++) {
    password += letters[Math.floor(Math.random() * letters.length)];
  }
  for (let i = 0; i < Math.floor(Math.random() * 3) + 1; i++) {
    password = password.replace(
      password[Math.floor(Math.random() * password.length)],
      Math.floor(Math.random() * 9) + 1
    );
  }
  return password;
};

console.log(generatePassword());
