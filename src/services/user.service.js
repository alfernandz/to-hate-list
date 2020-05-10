
export const userService = {
    getUser,
    logout,
};

function getUser(username, password) {
    if(username.toLowerCase() === 'donald' && password.toLowerCase() === 'trump') {
      const user = {name: username};
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    }
    return null;
}

function logout() {
    localStorage.removeItem('user');
}