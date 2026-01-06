const Subscription = require('../models/Subscription');
const {generateUserId} = require('../utils/userIdGenerate');

const createSubscription = async (req, res) => {
  try {
    const {name, amount, billingCycle, renewalDate, isTrial, source } = req.body;
    const userId = generateUserId();
    if (!name || !amount || !billingCycle || !renewalDate) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, amount, billingCycle, renewalDate'
      });
    }

    const subscription = new Subscription({
      userId,
      name,
      amount,
      billingCycle,
      renewalDate: new Date(renewalDate),
      isTrial: isTrial || false,
      source: source || 'manual'
    });

    await subscription.save();

    res.status(201).json({
      success: true,
      message: 'Subscription created successfully',
      data: subscription
    });
  } catch (error) {
    console.error('Error creating subscription:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};


const getSubscriptions = async (req, res) => {
  try {
    const {userId} = req.query
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: 'User authentication required'
      });
    }

    const subscriptions = await Subscription.find({userId}).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: 'Subscriptions retrieved successfully',
      data: subscriptions,
      count: subscriptions.length
    });
  } catch (error) {
    console.error('Error fetching subscriptions:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};

module.exports = {
  createSubscription,
  getSubscriptions
};