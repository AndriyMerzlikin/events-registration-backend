import mongoose from 'mongoose';

const participantSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	birthDate: {
		type: Date,
		required: true
	},
	reason: {
		type: String,
		enum: ['Social media', 'Friends', 'Found myself'],
		required: true
	}
});

export default participantSchema;
