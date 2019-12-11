//const user = require('./routes/users')
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const ObjectId = mongoose.Schema.Types.ObjectId;


const taskSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
    },
    description:{ 
        type: String,
        required: true,
    },
    status: {
        type: String,
        default:'awaiting',
        enum: ['awaiting', 'in progress', 'finished'],
        required:true 
      },
      isUrgent:Boolean,
      creationDate: {
        type: Date,
        default: Date.now
    },
    dueDate: String,
    userID: {
      type: ObjectId,
      ref:'User',
      required:true
     }
  });
  
  const Task = mongoose.model('Task', taskSchema);
  


router.get('/', async (req, res) => {
    const tasks = await Task.find().sort('CreationDate');
    res.send(tasks);
});

router.post('/', async(req, res) => {

const task = new Task({
    name: req.body.name,
    description:req.body.description,
    status: req.body.status,
    isUrgent:req.body.isUrgent,
    dueDate: req.body.dueDate,
    userID: {_id: user._id,}
        
})
await task.save();
res.send(task);
});

router.put('/:id', async (req, res) => {
  
    const task = await Task.findByIdAndUpdate(req.params.id,{
        name: req.body.name,
        description:req.body.description,
        status: req.body.status,
        isUrgent:req.body.isUrgent,
        dueDate: req.body.dueDate,
        userID: {
           _id: user._id,
            } 
    }, { new: true });

    if(!task) return res.status(404).send('Task with the given ID was not found')
    
    res.send(task);
});

router.delete('/:id', async (req, res) => {
    const task = await Task.findByIdAndRemove(req.params.id);
  
    if (!task) return res.status(404).send('Task with the given ID was not found');
  
    res.send(task);
  });
  
  router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
  
    if (!task) return res.status(404).send('Task with the given ID was not found');
  
    res.send(task);
  });
  
  module.exports = router; 