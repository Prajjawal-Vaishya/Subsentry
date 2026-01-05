export const BILLING_CYCLES = {
  MONTHLY: "monthly",
  YEARLY: "yearly",
} as const;

export const SUBSCRIPTION_STATUSES = {
  ACTIVE: "active",
  TRIAL: "trial",
  CANCELLED: "cancelled",
  EXPIRED: "expired",
} as const;

export const SUBSCRIPTION_SOURCES = {
  MANUAL: "manual",
  GMAIL: "gmail",
  STRIPE: "stripe",
  RAZORPAY: "razorpay",
} as const;
