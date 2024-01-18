const fs = require("fs");
const path = require("path");

const CuurentDirPath = require("../util/path");

const currentPath = path.join(CuurentDirPath, "data", "product.json");

const getProductsFromFile = (cb) => {
  fs.readFile(currentPath, (error, fileContent) => {
    console.log(error);
    if (!error) {
      return cb(JSON.parse(fileContent));
    }

    cb([]);
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(currentPath, JSON.stringify(products), (error) => {
          console.log(error);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
