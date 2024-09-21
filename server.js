import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import eventsRoutes from "./routes/eventsRoutes.js";



const app = express();

const port = process.env.PORT || 5555;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('MongoDB connected'))
	.catch(err => console.log('MongoDB connection error:', err));

app.use(cors());

app.use(express.json());

app.use('/events', eventsRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`));