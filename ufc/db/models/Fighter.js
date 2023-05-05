import mongoose from "mongoose";

const { Schema } = mongoose;

const fighterSchema = new Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    weight: { type: String, required: true },
    coordinates: { type: [Number], required: true },
    image: { type: String, required: true },
    height: { type: Number, required: true },
   
    ranking: { type: String, required: true },
    record: { type: String, required: true },
    fights: {type: [String], required: false}
    
});
 

const Fighter = mongoose.models.Fighter || mongoose.model("Fighter", fighterSchema);



export default Fighter;