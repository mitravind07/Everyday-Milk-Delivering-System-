function handleHomePage(req, res) {
  res.render("home");
}

function handleLogin(req, res) {
  res.render("login");
}

function handleSignUp(req, res) {
  res.render("signup");
}

module.exports = {
  handleHomePage,
  handleLogin,
  handleSignUp,
};
