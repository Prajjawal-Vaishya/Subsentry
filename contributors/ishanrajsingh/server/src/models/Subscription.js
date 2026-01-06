const mongoose=require("mongoose")

const subscriptionSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    billingCycle: {
      type: String,
      enum: ['monthly', 'yearly'],
      required: true,
    },
    renewalDate: {
      type: Date,
      required: true,
    },
    isTrial: {
      type: Boolean,
      default: false,
    },
    source: {
      type: String,
      enum: ['manual', 'email'],
      default: 'manual',
    },
  },
  { timestamps: true }
);

const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;