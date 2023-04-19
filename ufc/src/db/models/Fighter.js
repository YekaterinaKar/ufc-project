import mongoose from "mongoose";

const { Schema } = mongoose;

const fighterSchema = new Schema({
  name: { type: String, required: true }});

const Fighter = mongoose.models.Fighter || mongoose.model("Fighter", fighterSchema);

export default Fighter;