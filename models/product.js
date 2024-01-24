const db = require("../util/db");

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save(id) {
    if (id !== null) {
      return db.execute(
        "UPDATE products SET title = ? ,price = ?, description =?, imageUrl =? where id = ?",
        [this.title, this.price, this.description, this.imageUrl , id]
      );
    } else {
      return db.execute(
        "INSERT INTO products (title, price, description, imageUrl) VALUES ( ?,?,?,?)",
        [this.title, this.price, this.description, this.imageUrl]
      );
    }
  }

  delete(id) {
    return db.execute('DELETE FROM products where id = ?', [id]);
  }

  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }

  static findById(id) {
    return db.execute("SELECT * FROM products where id = ?", [id]);
  }
};
