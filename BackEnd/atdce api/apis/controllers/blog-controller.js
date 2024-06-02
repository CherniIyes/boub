const pool = require('../db_connect.js');

// Get all blogs
const getBlogs = (req, res) => {
    const sql = 'SELECT * FROM blogs';
    pool.query(sql, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error getting blogs from the database');
        } else {
            res.json(result);
        }
    });
};

// Get the latest blog
const getLatestBlog = (req, res) => {
    const sql = 'SELECT * FROM blogs ORDER BY created_at DESC LIMIT 1';
    pool.query(sql, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error getting blogs from the database');
        } else {
            res.json(result);
        }
    });
};

// Create a new blog
const createBlog = (req, res) => {
    const { title, content, author, imageurl, imageurl1, imageurl2, imageurl3, imageurl4 } = req.body;
    const newBlog = { title, content, author, imageurl, imageurl1, imageurl2, imageurl3, imageurl4 };

    const sql = 'INSERT INTO blogs SET ?';
    pool.query(sql, newBlog, (error, results) => {
        if (error) {
            console.error('Error creating blog:', error);
            res.status(500).send('Error creating blog');
        } else {
            getLatestBlog(req, res); // Fetch and return the latest blog after creating a new one
        }
    });
};

const updateBlog = (req, res) => {
    const blogId = req.params.id;
    const { title, content, author, imageurl, imageurl1, imageurl2, imageurl3, imageurl4 } = req.body;
    const updatedBlog = { title, content, author, imageurl, imageurl1, imageurl2, imageurl3, imageurl4 };

    const sql = 'UPDATE blogs SET ? WHERE id = ?';
    pool.query(sql, [updatedBlog, blogId], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error updating blog');
        } else if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Blog not found' });
        } else {
            res.status(200).json({ status: 'success', message: 'Blog updated successfully!' });
        }
    });
};

const deleteBlog = (req, res) => {
    const blogId = req.params.id;

    const sql = 'DELETE FROM blogs WHERE id = ?';
    pool.query(sql, blogId, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error deleting blog');
        } else if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Blog not found' });
        } else {
            res.status(200).json({ status: 'success', message: 'Blog deleted successfully!' });
        }
    });
};

module.exports = {
    getBlogs,
    getLatestBlog,
    createBlog,
    updateBlog,
    deleteBlog
};