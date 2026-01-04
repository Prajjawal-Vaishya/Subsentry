// contributors/ishanrajsingh/server/src/models/Subscription.js

const mongoose = require('mongoose');
const {
  BILLING_CYCLES,
  SUBSCRIPTION_STATUS,
  SUBSCRIPTION_CATEGORIES,
  SUBSCRIPTION_SOURCES,
  DEFAULT_CURRENCY,
} = require('../constants/subscription.constants');

const SubscriptionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required'],
    index: true,
  },
  name: {
    type: String,
    required: [true, 'Subscription name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters'],
  },
  amount: {
    type: Number,
    required: [true, 'Amount is required'],
    min: [0, 'Amount cannot be negative'],
  },
  currency: {
    type: String,
    default: DEFAULT_CURRENCY,
    enum: ['INR', 'USD', 'EUR', 'GBP'],
  },
  billingCycle: {
    type: String,
    required: [true, 'Billing cycle is required'],
    enum: Object.values(BILLING_CYCLES),
    lowercase: true,
  },
  nextBillingDate: {
    type: Date,
    required: [true, 'Next billing date is required'],
  },
  category: {
    type: String,
    default: SUBSCRIPTION_CATEGORIES.OTHER,
    enum: Object.values(SUBSCRIPTION_CATEGORIES),
  },
  status: {
    type: String,
    enum: Object.values(SUBSCRIPTION_STATUS),
    default: SUBSCRIPTION_STATUS.ACTIVE,
  },
  source: {
    type: String,
    enum: Object.values(SUBSCRIPTION_SOURCES),
    default: SUBSCRIPTION_SOURCES.MANUAL,
  },
  description: {
    type: String,
    maxlength: [500, 'Description cannot exceed 500 characters'],
  },
  website: {
    type: String,
    trim: true,
  },
  reminderEnabled: {
    type: Boolean,
    default: true,
  },
  reminderDays: {
    type: Number,
    default: 3,
    min: [1, 'Reminder days must be at least 1'],
    max: [30, 'Reminder days cannot exceed 30'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update updatedAt before save
SubscriptionSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

// Compound index for user-specific queries
SubscriptionSchema.index({ userId: 1, status: 1 });

module.exports = mongoose.model('Subscription', SubscriptionSchema);
