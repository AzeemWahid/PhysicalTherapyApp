var express = require('express');

var mongodb = require('mongodb');

var mongoose = require('mongoose');

var router = express.Router();


router
    .route("/exercise")
    .get( (req, res) => {
        res.send("hey get you did it!");

    })
    
    .post( (req, res) => {
        res.send("hey post you did it!");
    })

    
















//This function connects to the db as well as creates a model within it store a particular set of data
async function loadPostsCollection(){
   var db = 'mongodb+srv://MAL_DbUser:physicaltherapydb1@pt-app.5pwkv.mongodb.net/PTdb?retryWrites=true&w=majority';
   await mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
   
   const client = mongoose.connection;

   client.on('error', console.error.bind(console, 'MongoDB connection error:'));
   
   return client.model('exercisePosts', schema);
}


// GET Posts
/*
router.get('/', async (req, res) => {
    const exercisePosts = await loadPostsCollection();

    res.send(await exercisePosts.find({}).toArray());

})
*/

//Add Posts





module.exports = router;