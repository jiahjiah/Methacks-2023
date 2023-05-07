const express = require('express')
const app = express()
const Post = require('./models/Post');
const mongoose = require('mongoose');

dbURI = "mongodb+srv://turtleman:test123@cluster0.yc8zhlh.mongodb.net/MetHacks?retryWrites=true&w=majority"

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

app.get('/add-post', (req, res) => {
    console.log("hhihihihiihihih roblox is coo,")
const post = new Post({
    label: 'new blog',
    title: 'about my new blog',
    snippet: 'more about my new blog',
    url: 'cool url haha'
})

function func(){
    console.log("this function is running!!!")
    // console.log("hhihihihiihihih roblox is coo,")
    // const post = new Post({
    //     label: 'new blog',
    //     title: 'about my new blog',
    //     snippet: 'more about my new blog',
    //     url: 'cool url haha'
    // })
}

post.save()
    .then(result => {
    res.send(result);
    })
    .catch(err => {
    console.log(err);
    });

});
  
console.log("im running!")