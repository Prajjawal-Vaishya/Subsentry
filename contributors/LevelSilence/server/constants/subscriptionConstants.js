const BILLING_CYCLES = {
  MONTHLY: "monthly",
  YEARLY: "yearly",
};

const SUBSCRIPTION_CATEGORIES = {
  ENTERTAINMENT: "entertainment",
  EDUCATION: "education",
  PRODUCTIVITY: "productivity",
  UTILITIES: "utilities",
  OTHER: "other",
};

const SUBSCRIPTION_STATUSES = {
  ACTIVE: "active",
  TRIAL: "trial",
  CANCELLED: "cancelled",
  EXPIRED: "expired",
};

const SUBSCRIPTION_SOURCES = {
  MANUAL: "manual",
  GMAIL: "gmail",
  STRIPE: "stripe",
  RAZORPAY: "razorpay",
};

module.exports = {
  BILLING_CYCLES,
  SUBSCRIPTION_CATEGORIES,
  SUBSCRIPTION_STATUSES,
  SUBSCRIPTION_SOURCES,
};
