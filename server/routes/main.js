const express = require('express')

const router = express.Router()
const post = require('../models/post')

router.get('', (req, res) => {
  res.render('index')
})

router.get('/about', (req, res) => {
  res.render('about')
})

// function insertPostData() {
//   post.insertMany([
//     {
//       title: "Building a blog",
//       body: "Node JS, Express, Mongo",
//     }
//   ])
// }
// insertPostData();


module.exports = router