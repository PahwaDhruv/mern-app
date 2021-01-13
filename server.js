const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const categoryRoutes = require('./routes/api/categoryRoutes');

const app = express();

//BodyParser Middleware
app.use(bodyParser.json());

//MongoDB URL
const dbURL = 'mongodb+srv://dhruv:dhruv12345@cluster0.ylblw.mongodb.net/mern-app-db?retryWrites=true&w=majority';

//Connect DB
mongoose.connect(dbURL,{ useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Mongo DB Connected..'))
.catch(err => console.log(err))

//Routes
app.use('/api', categoryRoutes);

//Serve static assets
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`App Started on Port : ${port}`)
})