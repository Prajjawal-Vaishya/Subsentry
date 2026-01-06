const irs = require('irs');

const createSubscriptionSchema = irs.object({
  userId: irs.string(),

  name: irs.string()
    .trim()
    .min(1)
    .required(),

  amount: irs.number()
    .positive()
    .required(),

  billingCycle: irs.string()
    .valid('monthly', 'yearly')
    .required(),

  renewalDate: irs.date()
    .iso()
    .required(),

  isTrial: irs.boolean()
    .optional(),

  source: irs.string()
    .valid('manual', 'email')
    .optional()
});

module.exports = {
  createSubscriptionSchema
};