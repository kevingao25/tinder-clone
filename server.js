import express from "express";
import Mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from "cors";

// App Config
const app = express();
const port = process.env.port || 8001;
const connection_url = `mongodb+srv://admin:dWCCK2YdcS7dgMeu@cluster0.tbun6.mongodb.net/tinderdb?retryWrites=true&w=majority`;

// Middlewares
app.use(express.json());
app.use(Cors());

// DB config
Mongoose.connect(connection_url, {
	// useNewUrlParser: true,
	// useCreateIndex: true,
	// useUnifiedTopology: true,
});

// API Endpoints
app.get("/", (req, res) => res.status(200).send("HELLO WORLD!"));

app.post("/tinder/cards", (req, res) => {
	const dbCard = req.body;

	Cards.create(dbCard, (err, data) => {
		if (err) {
			res.status(500).send(err); // Internal error
		} else {
			res.status(201).send(data); // Successfully Created
		}
	});
});

app.get("/tinder/cards", (req, res) => {
	Cards.find((err, data) => {
		if (err) {
			res.status(500).send(err); // Internal error
		} else {
			res.status(200).send(data); // Successfully Created
		}
	});
});

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
