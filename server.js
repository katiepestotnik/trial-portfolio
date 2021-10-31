const express = require('express');
const cors = require('cors');
// const methodOverride = require('method-override');
const projects = require('./projects.json');
const about = require('./about.json');
const app = express();

//MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
// app.use(methodOverride('_method'));
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
//below routes for form
//index
app.get('/form/', (req, res) => {
    res.send('testing');
});

app.post('/form', (req, res) => {
    projects.push(req.body);
    res.redirect('/');
});

//PORT
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Listing on ${PORT}`);
});