const express = require('express');

const router = express.Router();

const Post = require('../models/Post');



/* //debugging to show router is working with comment on screen
router.get('/', (req, res) => { //this is a responce sending data to server page
    res.send('we are on posts');
});
*/

//we use the Post.findById() to find a specific post based on its ID
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({message: err});
    }
});

//deletes a post
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.deleteOne({_id: req.params.postId});
        res.json(removedPost);
    } catch (err) {
        res.json({message: err});
    }
});

router.patch('/:postId', async (req, res) => {
   try {
       const updatedPost = await Post.updateOne(
           { _id: req.params.postId},
           { $set: {title: req.body.title} }
           );
       res.json(updatedPost);
   } catch (err) {
       res.json({message: err});
   }
});


//gets all the posts
router.get('/', async (req, res) => {
   try{
       const posts = await Post.find();  //this holds all the posts that we are going to get, we call find() method from mongoos to .limit
       res.json(posts);
   } catch(err){
     res.json({message: err});
   }
});

//submits all the posts
router.post('/', async (req, res) => { //this is a request to api request
    const post = new Post({
        title: req.body.title,
        description: req.body.description      //creates a new post based off the schema in the models for posts this is an object
    });

/* //The old way of the try statement below
    const savedPost = await post.save()
        .then(data => {
            res.json(data); //res.status.json(data);
        })
        .catch(err => {
            res.json({message: err});
        });
*/
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({message: err});
    }
});

/* //this is how to debug
router.get('/', (req, res) => {
    console.log(req.body);
});
*/



/*
router.get('/specfic', (req, res) => {
    res.send('galler');
});
*/

module.exports = router;
