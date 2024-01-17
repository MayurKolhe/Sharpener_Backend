
exports.getContactUs = (req, res, next) => {
  res.render("contact-us", {
    pageTitle: "Contact-Us",
    path: "/contact-us",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postContactUs = (req, res, next) => {
  res.render('<h1> Message submitted Successfully <h1>');
//   res.redirect("/");
};