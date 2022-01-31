import { Router } from "express";
import Task from '../models/Task'

const router = Router();

router.get("/tasks", async (req, res) => {
    const tasks = await Task.find();
    res.send(tasks);
})

router.post("/tasks", async (req, res) => {
    const { title, description } = req.body;

    const task = new Task({title, description});

    await task.save();

    res.json(task);
})

router.get("/tasks/:id", async (req, res) => {
   try{
    const task = await Task.findById(req.params.id);

    if(!task) return res.status(404).json({message: "Task not Found"});

    res.send(task);
   }catch(e){
       res.status(500).send(e);
   }
})

router.delete("/tasks/:id", async (req, res) => {
    try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if(!task) return res.status(404).json({message: "Task not Found"});

    return res.json(task);
    } catch (error) {
        return res.status(500).send(error);
    }
})

router.put("/tasks/:id", async (req, res) => {
    const updatedTasks = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.json(updatedTasks);
})

export default router;