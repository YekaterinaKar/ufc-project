import mongoose from "mongoose";

const { Schema } = mongoose;

const fighterSchema = new Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    weight: { type: String, required: true },
    coordinates: { type: [Number], required: true }
});
 

const Fighter = mongoose.models.Fighter || mongoose.model("Fighter", fighterSchema);



export default Fighter;