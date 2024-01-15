const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000 ;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;

connection.once('open', ()=> {
    console.log("MongoDB connection established successfully");
});

app.use(cors());
app.use(express.json());

const Incident = require('./routes/Incident');
const { Router } = require('express');
const BackModelsIncident = require('./routes/BackModelsIncident');
const { Router } = require('express');


app.use('/Incident', Incident);
app.use('/BackModelsIncident', BackModelsIncident);



app.use('/version', function (req, res, next) {
    console.log('Time for main function: %d', Date.now())
    next();
})
app.get('/api', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send('{"version": "1.0.0"}')
})

app.listen(port, ()=> {
    console.log(`server is running on port ${port}`);
});

