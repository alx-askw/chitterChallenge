import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    password: { type: String, required: true },
    pfpUrl: { type: String, required: false }
})

const User = mongoose.model('User', userSchema);

export default User;