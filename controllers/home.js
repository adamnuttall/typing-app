/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};

exports.typing = function(req, res) {
  res.render('typing', {
    title: 'Typing Game'
  });
};