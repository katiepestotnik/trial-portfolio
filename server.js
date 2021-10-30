const express = require('express');
const cors = require('cors');
const projects = require('./projects.json');
const about = require('./about.json');
const app = express();

//MIDDLEWARE
app.use(cors());
//home
app.get('/', (req, res) => {
    res.send('test');
});
//projects
app.get('/projects', (req, res) => {
    res.json(projects);
});
//about
app.get('/about', (req, res) => {
    res.json(about)
});

//PORT
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Listing on ${PORT}`);
});