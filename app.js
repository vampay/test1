const express= require('express');
const{getbooks,getbooks,createbooks,updatebooks,deletebooks}= require('../controller/booksController');
const router = express.Router();

router.post('/books',createbooks);
router.get('/books',getProducts);
router.get('/books/:id',getProducts);
router.put('/books/:id',updatebooks);
router.delete('/books/:id',deletebooks);

module.exports = router;