//create web server
const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const Post = require('../models/Post');
const User = require('../models/User');
const { ensureAuthenticated } = require('../config/auth');

// GET request to /comments
router.get('/', ensureAuthenticated, (req, res) => {
    //find all comments
    Comment.find({}, (err, comments) => {
        if (err) {
            res.send('Error: ' + err);
        } else {
            res.render('comments/index', {
                comments: comments
            });
        }
    });
});

// GET request to /comments/new
router.get('/new', ensureAuthenticated, (req, res) => {
    res.render('comments/new', {
        comment: new Comment()
    });
});

// POST request to /comments
router.post('/', ensureAuthenticated, (req, res) => {
    //create comment
    Comment.create({
        content: req.body.content,
        post: req.body.post,})
    }, (err, newComment) => {

    });