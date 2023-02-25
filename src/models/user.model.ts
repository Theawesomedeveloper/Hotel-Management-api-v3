import { Schema, model } from "mongoose";


const userSchema : Schema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ['guest', 'admin'],
        default: 'guest',
    },
});

export default model('User', userSchema);