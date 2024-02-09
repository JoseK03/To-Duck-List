import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required : true
    },
    date:{
        type: Date,
        default: Date.now
    }
},
    {
        timestamps : true
    });

export default mongoose.model('Task', taskSchema);