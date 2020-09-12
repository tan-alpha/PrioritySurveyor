module.exports = {
  ensureAuthenticated: function (req, res, next) {
    if (req.user && req.isAuthenticated()) {
      return next();
    }
    // req.flash("error_msg", "Please log in to view that resource");
    res.redirect("/");
  },
  isAdmin: function (req, res, next) {
    if (req.user && req.user.role === "admin") {
      return next();
    }
    res.redirect("/");
  },
};
