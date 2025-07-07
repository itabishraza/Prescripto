import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const appointmentSchema = new Schema({
    userId: { type: String, require: true },
    docId: { type: String, require: true },
    slotDate: { type: String, require: true },
    slotTime: { type: String, require: true },
    userData: { type: String, require: true },
    docData: { type: String, require: true },
    amount: { type: Number, require: true },
    date: { type: Number, require: true },
    cancelled: { type: Boolean, require: false },
    payment: { type: Boolean, require: false },
    isCompleted: { type: Boolean, require: false },
})

const appointmentModel = models.appointment || model('appointment', appointmentSchema)
export default appointmentModel