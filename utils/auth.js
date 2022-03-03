const withAuth = (req, res, next) => {
  // Redirect if logged in
  if(!req.session.loggedIn) {
    res.redirect('/login')
  } else {
    next();
  }
};
  
module.exports = withAuth;
  