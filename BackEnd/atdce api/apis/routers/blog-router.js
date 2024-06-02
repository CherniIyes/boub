const express = require('express');
const router = express.Router();

const { getBlogs, getBlog, createBlog, updateBlog, deleteBlog } = require('../controllers/blog-controller.js');

router.get('/get', getBlogs);
router.get('/:id', getBlog);
router.post('/', createBlog);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);


module.exports = router;