import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Event from './models/Event.js'; // Імпорт моделі
import eventsData from './data.js'; // Імпорт даних з файлу

// Завантаження змінних середовища
dotenv.config();

// Підключення до бази даних
mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then(() => {
	console.log('MongoDB connected');
	seedDatabase(); // Функція для завантаження даних
}).catch(err => console.log('MongoDB connection error:', err));

// Функція для імпорту даних у базу
const seedDatabase = async () => {
	try {
		// Видалити всі старі дані, якщо потрібно
		await Event.deleteMany();

		// Додати нові дані з файлу data.js
		await Event.insertMany(eventsData);

		console.log('Data successfully imported');
		process.exit();
	} catch (error) {
		console.error('Error importing data:', error);
		process.exit(1);
	}
};
