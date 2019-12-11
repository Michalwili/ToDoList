const mongoose = require('mongoose')
const tasks = require('./routes/tasks')
const users = require('./routes/users')
const express = require ('express');
const path = require('path');
const app = express();


mongoose.connect('mongodb://localhost/ToDoList')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

  app.use(express.json());
  app.use('/api/tasks', tasks);
  app.use('/api/users', users);



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));