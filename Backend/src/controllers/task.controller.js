import Task from "../models/Task.model";

const getTask = async (req,res) => {
    try {
        const task = await Task.find();
        res.json(task);
    } catch (error) {
        console.error(error);
        res.status(404).json({message : 'Error al encontrar las tareas'});
    }
}

const postTask = async (req,res) => {
    const {title, description} = req.body;
    try {
        const newTask = new Task({
            title,
            description,
            date
        });
        const task = await newTask.save();
        res.json(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({message : 'Error al registrar la tarea.'})   
    }
}