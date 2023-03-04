const express = require("express");
const app = express();

// Mock data
const products = [
  {
    id: 1,
    name: "Product1",
    total_quantity: 12,
    type_of_product: "shirt",
    price: 300,
  },
  {
    id: 2,
    name: "Product2",
    total_quantity: 5,
    type_of_product: "pants",
    price: 500,
  },
  // Add more products here
];
app.use(express.json());

// Get all products
app.get("/products", (req, res) => {
  res.json(products);
});

// Get product by id
app.get("/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = products.find((p) => p.id === Number(productId));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// Get product by name
app.get("/products/name/:name", (req, res) => {
  const productName = req.params.name;
  const product = products.find((p) => p.name === productName);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// Add product
app.post("/addproduct", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  //   res.json(newProduct);
  console.log(req.body);
  res.send(newProduct);
});

// Start server
app.listen(3000, () => console.log("Server started on port 3000"));
