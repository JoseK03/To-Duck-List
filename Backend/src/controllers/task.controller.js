import Task from "../models/Task.model.js";

export const getTask = async (req,res) => {
    try {
        const task = await Task.find({ user : req.user.id});
        res.json(task);
    } catch (error) {
        console.error(error);
        res.status(404).json({message : 'Error al encontrar las tareas'});
    }
}

export const postTask = async (req,res) => {
    const {title, description, date, user} = req.body;
    try {
        const newTask = new Task({
            title,
            description,
            date,
            user : req.user.id
        });
        const task = await newTask.save();
        res.json(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({message : 'Error al registrar la tarea.'})   
    }
}

export const getOneTask = async (req, res) => {
    try {
        const findOne = await Task.findById(req.params.id);
        if (findOne) {
            res.json(findOne);
        } else {
            res.status(404).json({ message: 'Tarea no encontrada.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al encontrar tarea' });
    }
}

export const deleteTask = async (req, res) => {
    try {
        const deleteTask = await Task.findByIdAndDelete(req.params.id);
        if(!deleteTask) res.status(404).json({message : 'Esta tarea no existe por lo tanto no puede ser eliminada.'})
        res.status(204).json({ message : 'Tarea eliminada'});
    } catch (error) {
        console.error(error);
        res.status(500).json({message : 'Error al intentar eliminar.'})
    }
}

export const updateTask = async (req, res) => {
    try {
        const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new : true});
        if(!deleteTask) res.status(404).json({message : 'Esta tarea no existe por lo tanto no puede ser eliminada.'});
        res.status(200).json({message: 'Tarea actualizada.',updateTask});
    } catch (error) {
        console.error(error);
        res.status(500).json({message : 'Error al intentar editar.'})
    }
}

