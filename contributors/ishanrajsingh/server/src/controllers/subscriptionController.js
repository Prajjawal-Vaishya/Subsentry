// contributors/ishanrajsingh/server/src/controllers/subscriptionController.js

const Subscription = require('../models/Subscription');
const { BILLING_CYCLES } = require('../constants/subscription.constants');

/**
 * @desc    Create new subscription
 * @route   POST /api/subscriptions
 * @access  Private
 */
exports.createSubscription = async (req, res) => {
  try {
    const {
      name,
      amount,
      currency,
      billingCycle,
      nextBillingDate,
      category,
      description,
      website,
      reminderEnabled,
      reminderDays,
    } = req.body;

    // Basic required fields validation
    if (!name || amount === undefined || !billingCycle || !nextBillingDate) {
      return res.status(400).json({
        success: false,
        message:
          'Missing required fields: name, amount, billingCycle, nextBillingDate',
      });
    }

    if (amount < 0) {
      return res.status(400).json({
        success: false,
        message: 'Amount must be a positive number',
      });
    }

    const validCycles = Object.values(BILLING_CYCLES);
    const normalizedCycle = String(billingCycle).toLowerCase();

    if (!validCycles.includes(normalizedCycle)) {
      return res.status(400).json({
        success: false,
        message: `Invalid billing cycle. Allowed values: ${validCycles.join(
          ', ',
        )}`,
      });
    }

    const nextDate = new Date(nextBillingDate);
    if (Number.isNaN(nextDate.getTime())) {
      return res.status(400).json({
        success: false,
        message: 'Invalid nextBillingDate',
      });
    }

    if (!req.user || (!req.user.id && !req.user._id)) {
      return res.status(401).json({
        success: false,
        message: 'User context not found on request',
      });
    }

    const subscription = await Subscription.create({
      userId: req.user.id || req.user._id,
      name,
      amount,
      currency,
      billingCycle: normalizedCycle,
      nextBillingDate: nextDate,
      category,
      description,
      website,
      reminderEnabled:
        typeof reminderEnabled === 'boolean' ? reminderEnabled : true,
      reminderDays: reminderDays || 3,
    });

    return res.status(201).json({
      success: true,
      message: 'Subscription created successfully',
      data: subscription,
    });
  } catch (error) {
    console.error('Create subscription error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error while creating subscription',
      error: error.message,
    });
  }
};

/**
 * @desc    Get all subscriptions for authenticated user
 * @route   GET /api/subscriptions
 * @access  Private
 */
exports.getSubscriptions = async (req, res) => {
  try {
    if (!req.user || (!req.user.id && !req.user._id)) {
      return res.status(401).json({
        success: false,
        message: 'User context not found on request',
      });
    }

    const { status, category, billingCycle, sortBy = 'createdAt', order = 'desc' } =
      req.query;

    const query = {
      userId: req.user.id || req.user._id,
    };

    if (status) {
      query.status = status;
    }
    if (category) {
      query.category = category;
    }
    if (billingCycle) {
      query.billingCycle = String(billingCycle).toLowerCase();
    }

    const sortOrder = order === 'asc' ? 1 : -1;
    const sortOptions = {};
    sortOptions[sortBy] = sortOrder;

    const subscriptions = await Subscription.find(query)
      .sort(sortOptions)
      .lean();

    return res.status(200).json({
      success: true,
      count: subscriptions.length,
      data: subscriptions,
    });
  } catch (error) {
    console.error('Get subscriptions error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error while fetching subscriptions',
      error: error.message,
    });
  }
};
