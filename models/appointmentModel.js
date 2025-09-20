import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },

  docId: {
    type: String,
    required: true,
  },

  slotDate: {
    type: String,
    required: true,
  },

  slotTime: {
    type: String,
    required: true,
  },

  userData: {
    type: Object,
  },

  docData: {
    type: Object,
  },

  amount: {
    type: Number,
  },

  data: {
    type: Number,
  },

  cancelled: {
    type: Boolean,

    default: false,
  },

  payment: {
    type: Boolean,

    default: false,
  },

  isComplete: {
    type: Boolean,

    default: false,
  },
});

const appointmentModel =
  mongoose.models.appointment ||
  mongoose.model("appointment", appointmentSchema);

export default appointmentModel;
