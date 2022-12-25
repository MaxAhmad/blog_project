const express = require('express')

const blogController = require('../controllers/blogControllers')

const router = express.Router()


router.get('/', blogController.getAllPost)

router.get('/:id', blogController.getBlogPost)

router.post('/', blogController.createBlogPost)

router.patch('/:id', blogController.updateBlogPost)

router.delete('/:id', blogController.deleteBlogPost)

module.exports = router