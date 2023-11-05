import mongoose from "mongoose";

const { Schema } = mongoose;

const flagSchema = new Schema({
	name: String,
	flag: String,
	bg: String,
	author: String,
});

const Flag = mongoose.model("Flag", flagSchema);

export default Flag;
