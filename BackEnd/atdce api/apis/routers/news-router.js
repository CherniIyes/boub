const express = require('express');
const router = express.Router();

const { getNews, get1News, createNews, updateNews, deleteNews } = require('../controllers/news-controller.js');

router.get('/', getNews);
router.get('/:id', get1News);
router.post('/', createNews);
router.put('/:id', updateNews);
router.delete('/:id', deleteNews);

module.exports = router;