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
});

const Fight =
    mongoose.models.Fight || mongoose.model("Fight", fightSchema);

export default Fight;
