const express = require('express');
const cors = require('cors');
const path = require('path');
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 4000;
const sequelize = require('./sequelize')
// const {DATABASE_URL} = process.env
// const {Sequelize} = require('sequelize')

// const sequelize = new Sequelize(
//   DATABASE_URL,
//   {
//     dialect: "postgres",
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false
//       }
//     }
//   }
// )

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

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));