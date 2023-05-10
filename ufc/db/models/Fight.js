import mongoose from "mongoose";

const { Schema } = mongoose;

const fightSchema = new Schema({
    between: { type: String, required: false },
    win: { type: String, required: false },
    date: { type: String, required: false },
    rounds: { type: Number, required: false },
    time: { type: String, required: false },
    by: { type: String, required: false },
    video: { type: String, required: false },
    comments: { type: [String], required: false },
    fair: { type: Number, required: false },
    unfair: { type: Number, required: false },
    rematch:{ type: Number, required: false },
    norematch: { type: Number, required: false }
});

const Fight =
    mongoose.models.Fight || mongoose.model("Fight", fightSchema);

export default Fight;
