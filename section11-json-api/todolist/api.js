// --
// Module Imports
// --

const express  = require('express');
const mongoose = require('mongoose');

const expressSanitizer = require('express-sanitizer');

// --
// Mongoose
// --

mongoose.set('debug', true);
mongoose.Promise = Promise;

const dbProtocol = 'mongodb';
const dbUser = process.env.MONGO_DB_USER || '';
const dbPassword = process.env.MONGO_DB_PASSWORD || '';
const dbUrl = process.env.MONGO_DB_URL || 'localhost/todolist';

const dbCredentialsProvided = (dbUser && dbPassword) ? true : false;

if (dbCredentialsProvided) {
    mongoose.connect(`${dbProtocol}://${dbUser}:${dbPassword}@${dbUrl}`);
} else {
    mongoose.connect(`${dbProtocol}://${dbUrl}`);
}

// --
// Mongoose Models
// --

const Todo = require('./models/todo');

// --
// Express
// --

const app = express();

app.set('ip', process.env.IP || 'localhost');
app.set('port', process.env.PORT || 3000);

// Body Parser
app.use(express.urlencoded({extended: true}));

// Sanitize body
app.use(expressSanitizer());

// --
//  > Routes
// --

const indexRoutes = require('./routes/index');
const todoRoutes  = require('./routes/todo');

app.use(indexRoutes);
app.use('/api/todos', todoRoutes);

// --
//  > Server Start
// --

app.listen(app.get('port'), app.get('ip'), () => {
    console.log(`Todolist Server started on ${app.get('ip')}:${app.get('port')}`);
});