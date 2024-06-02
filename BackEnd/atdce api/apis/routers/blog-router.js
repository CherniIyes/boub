const express = require('express');
const router = express.Router();

const { getBlogs, getLatestBlog, createBlog, updateBlog, deleteBlog } = require('../controllers/blog-controller.js');

router.get('/', getBlogs);
router.get('/latest', getLatestBlog);
router.post('/post',   createBlog);
router.put('/:id',   updateBlog);
router.delete('/:id', deleteBlog);

module.exports = router;


