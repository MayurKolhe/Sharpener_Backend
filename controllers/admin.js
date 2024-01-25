const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    edit: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  Product.create({
    title: title,
    imageUrl: imageUrl,
    price: price,
    description: description,
  })
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.getEditProduct = (req, res, next) => {
  const editModeQuery = req.query.edit;
  const prodId = req.params.productId;
  if (!editModeQuery || !prodId) {
    return res.redirect("/");
  }

  Product.findByPk(prodId)
    .then((product) => {
      res.render("admin/edit-product", {
        pageTitle: "Edit Product",
        path: "/admin/edit-product",
        edit: editModeQuery,
        product: product,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.postEditProduct = (req, res, next) => {
  Product.findByPk(req.body.productId)
    .then((product) => {
      product.title = req.body.title;
      product.price = req.body.price;
      product.description = req.body.description;
      product.imageUrl = req.body.imageUrl;
      product.save();
      res.redirect("/admin/products");
    })
    .then((error) => {
      console.log(error);
    });
};

exports.postDeleteProduct = (req, res, next) => {
  Product.findByPk(req.params.productId)
    .then((product) => {
      return product.destroy();
    })
    .then(() => {
      console.log("Product got Deleted Successfully");
      res.redirect("/admin/products");
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("admin/products", {
        prods: products,
        pageTitle: "Admin Products",
        path: "/admin/products",
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
