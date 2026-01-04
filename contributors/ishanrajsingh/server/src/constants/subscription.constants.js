// contributors/ishanrajsingh/server/src/constants/subscription.constants.js

const BILLING_CYCLES = {
  DAILY: 'daily',
  WEEKLY: 'weekly',
  MONTHLY: 'monthly',
  QUARTERLY: 'quarterly',
  YEARLY: 'yearly',
};

const SUBSCRIPTION_STATUS = {
  ACTIVE: 'active',
  PAUSED: 'paused',
  CANCELLED: 'cancelled',
};

const SUBSCRIPTION_CATEGORIES = {
  ENTERTAINMENT: 'Entertainment',
  SOFTWARE: 'Software',
  GAMING: 'Gaming',
  MUSIC: 'Music',
  HEALTH: 'Health',
  EDUCATION: 'Education',
  NEWS: 'News',
  CLOUD_SERVICES: 'Cloud Services',
  OTHER: 'Other',
};

const SUBSCRIPTION_SOURCES = {
  MANUAL: 'manual',
  GMAIL: 'gmail',
};

const DEFAULT_CURRENCY = 'INR';

module.exports = {
  BILLING_CYCLES,
  SUBSCRIPTION_STATUS,
  SUBSCRIPTION_CATEGORIES,
  SUBSCRIPTION_SOURCES,
  DEFAULT_CURRENCY,
};
