import mongoose from "mongoose";

const peepSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    name: { type: String, required: true },
    peepDate: {
        type: Date,
        default: new Date().toISOString(),
        required: true
    },
    peepContent: { type: String, required: true },
    peepReplies: [{
        userName: { type: String, required: true },
        peepDate: {
            type: Date,
            default: new Date().toISOString(),
            required: true
        },
        peepContent: { type: String, required: true },
    }]
})

const Peep = mongoose.model('Peep', peepSchema);

export default Peep;