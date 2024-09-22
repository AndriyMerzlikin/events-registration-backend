import { Router } from "express";
import Event from "../models/Event.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving events", error: err });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    if (!event.participants) {
      event.participants = [];
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const { title, description, eventDate, organizer, participants, imageUrl } =
    req.body;

  try {
    const newEvent = new Event({
      title,
      description,
      eventDate,
      organizer,
      participants,
      imageUrl,
    });

    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (err) {
    res.status(400).json({ message: "Error creating event", error: err });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, eventDate, organizer, participants, imageUrl } =
    req.body;

  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      id,
      { title, description, eventDate, organizer, participants, imageUrl },
      { new: true }
    );

    if (!updatedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// add participants

router.post("/:id/participants", async (req, res) => {
  const { id } = req.params;
  const { name, email, birthDate, reason } = req.body;

  try {
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    const newParticipant = { name, email, birthDate, reason };

    event.participants.push(newParticipant);
    const updatedEvent = await event.save();

    res.status(200).json(updatedEvent);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error adding participant", error: error.message });
  }
});

export default router;
