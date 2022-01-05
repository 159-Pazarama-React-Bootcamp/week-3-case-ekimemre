const getUsers = () => {
  fetch("https://61d467028df81200178a8cb4.mockapi.io/users")
  .then((response) => response.json())
  .then((json) => {
    return json;
  });
}

function userAuth(inputEmail, inputPassword) {
  return false;
}

export {
  getUsers,
  userAuth
}
