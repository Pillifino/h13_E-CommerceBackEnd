// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Categroy & Product relationship (ONE TO MANY)
  // Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id', // reference object inside of Product model
});
  // Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id', // reference object inside of Product model
  onDelete: 'CASCADE', // will delete parent id and it's dependent id's
});

// Product & Tags Relationship (MANY TO MANY)
  // Products belongToMany Tags (through ProductTag)
  Product.hasMany(ProductTag, {
    foreignKey: 'tag_id', // reference object inside of Product model
    onDelete: 'CASCADE', // will delete parent id and it's dependent id's
  });
  // Tags belongToMany Products (through ProductTag)
  Tag.hasMany(ProductTag, {
    foreignKey: 'product_id', // reference object inside of Product model
    onDelete: 'CASCADE', // will delete parent id and it's dependent id's
  });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
