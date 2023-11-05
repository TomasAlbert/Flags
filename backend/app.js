/* eslint-disable no-undef */
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Flag from "./flagmodel.js";
import cors from "cors";
const app = express();
dotenv.config();

const port = process.env.PORT || 3030;
const db = process.env.DB;
// Use JSON middleware to parse JSON data in incoming requests
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
	try {
		const flags = await Flag.find(); // Retrieve all flags from the database

		res.json(flags); // Send the flags as JSON in the response
	} catch (error) {
		console.error("Error:", error);
		res.status(500).json({ error: "An error occurred" });
	}
});
app.post("/", async (req, res) => {
	try {
		const { flag, bg, author } = req.body;
		const newFlag = new Flag({ flag, bg, author });
		await newFlag.save();
		res.json({ message: "Flag saved successfully" });
	} catch (error) {
		console.error("Error:", error);
		res.status(500).json({ error: "An error occurred" });
	}
});

mongoose
	.connect(db)
	.then(() => {
		console.log("succes");
		app.listen(port, () => {
			console.log(`Example app listening on port ${port}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});
