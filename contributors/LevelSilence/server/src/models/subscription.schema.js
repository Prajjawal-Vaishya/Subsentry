const mongoose = require("mongoose");

const {
  BILLING_CYCLES,
  SUBSCRIPTION_STATUSES,
  SUBSCRIPTION_SOURCES,
} = require("../../constants/subscriptionConstants");

const SubscriptionSchema = new mongoose.Schema(
  {
    userId: {
      type: String, // Clerk user ID
      required: true,
      index: true,
    },

    name: {
      type: String, // platform name
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    billingCycle: {
      type: String,
      enum: Object.values(BILLING_CYCLES),
      required: true,
    },

    status: {
      type: String,
      enum: Object.values(SUBSCRIPTION_STATUSES),
      default: SUBSCRIPTION_STATUSES.ACTIVE,
    },

    isTrial: {
      type: Boolean,
      default: false,
    },

    trialEndsAt: {
      type: Date,
    },

    renewalDate: {
      type: Date,
      required: true,
    },

    source: {
      type: String,
      enum: Object.values(SUBSCRIPTION_SOURCES),
      required: true,
    },

    externalId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Subscription", SubscriptionSchema);
