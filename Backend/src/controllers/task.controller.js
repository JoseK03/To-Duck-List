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