import mongoose from "mongoose";

const SubsriptionSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        index: true
    },
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    billingCycle: { type: String, enum: ['monthly', 'yearly'], required: true },
    renewalDate: { type: Date, required: true },
    isTrial: { type: Boolean, default: false },
    trialEndsAt: { type: Date },
    source: { type: String, enum: ['manual', 'email'], default: 'manual' }
}, { timestamps: true });

export const Subscription = mongoose.model("Subscription", SubsriptionSchema);
