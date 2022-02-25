const express = require('express');
const cors = require('cors');
const path = require('path');
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 4000;
const sequelize = require('./sequelize')

//Middleware
app.use(express.json());
app.use(cors());

// User Endpoints
app.get('/api/allProducts', async (req, res) => {
  let products = await sequelize.query(`
  SELECT * FROM products
  `)
  res.status(200).send(products[0])
})

app.post('/api/addToCart', async (req, res) => {
  const {userID, productID} = req.body
  await sequelize.query(`
    INSERT INTO cart (user_id, product_id)
    VALUES (
      ${userID},
      ${productID}
    )
  `)
  res.status(200).send("Item Added to Cart")
})

app.get('/api/userCart/:id', async (req, res) => {
  const {id} = req.params
  let myCart = await sequelize.query(`
  SELECT c.id as cart_id, p.name, p.description FROM cart c
  JOIN products p
  ON c.product_id = p.id
  WHERE c.user_id = ${id}
  `)
  res.status(200).send(myCart[0])
})

app.delete('/api/userCart/:id', async (req, res) => {
  const {id} = req.params
  await sequelize.query(`
  DELETE FROM cart WHERE id = ${id}
  `)
  res.status(200).send("Removed Item")
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));