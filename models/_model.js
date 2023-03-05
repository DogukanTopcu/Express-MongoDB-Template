import mongoose from "mongoose";

const _modelSchema = mongoose.Schema({
    title: String,
    age: Number,
    skills: Array,

    createdAt: {
        type: Date,
        default: new Date()
    },
    deadline: {
        type: Date,
        default: new Date(+new Date() + 30 * 24 * 60 * 60 * 1000)
    }
});


const _models = mongoose.model("_models", _modelSchema);

export default _models;