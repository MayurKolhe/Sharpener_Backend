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
  const product = new Product(null, title, imageUrl, description, price);
  product
    .save(null)
    .then(() => {
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

  Product.findById(prodId)
    .then(([product]) => {
      res.render("admin/edit-product", {
        pageTitle: "Edit Product",
        path: "/admin/edit-product",
        edit: editModeQuery,
        product: product[0],
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const udpatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedDescription = req.body.description;
  const updatedImageUrl = req.body.imageUrl;

  const udpatedProduct = new Product(
    prodId,
    udpatedTitle,
    updatedImageUrl,
    updatedDescription,
    updatedPrice
  );
  udpatedProduct.save(prodId);
  res.redirect("/admin/products");
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.params.productId;
  const deletePro = new Product();
    deletePro.delete(prodId)
      .then(() => {
        res.redirect("/admin/products");
      })
      .catch((error) => {
        console.log(error);
      });
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, filedData]) => {
      res.render("admin/products", {
        prods: rows,
        pageTitle: "Admin Products",
        path: "/admin/products",
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
