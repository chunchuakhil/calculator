const express = require('express') //gets repress package into this file
    //now execute express package
const app = express();
//now create routes
//get--get response from the server
app.get('/', (req, res) => {
        res.send('we are on home')
    })
    //post--to submiting the form to server
    //patch to update the post
    //get to get the information
    //post give the information

app.get('/show', (req, res) => {
        res.send('i am showing something')
    })
    //first bootUp the server
app.listen(3030, () => {
    console.log('server started....')
});