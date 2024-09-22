import mongoose from "mongoose";
import participantSchema from "./Participant.js";

// Створюємо схему події
const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    eventDate: {
      type: Date,
      required: true,
    },
    organizer: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    participants: {
      type: [participantSchema], // використання вашої схеми учасника
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

// Створюємо модель на базі схеми
const Event = mongoose.model("Event", eventSchema);

export default Event;
