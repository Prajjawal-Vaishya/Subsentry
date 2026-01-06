const express = require('express');
const router = express.Router();
const { createSubscription, getSubscriptions } = require('../controllers/subscriptionController');
const { createSubscriptionSchema } = require('../validators/subscriptionValidators');
const validateSubscriptionRequest = require('../middlewares/validateSubscriptionRequest');

router.post('/', validateSubscriptionRequest(createSubscriptionSchema), createSubscription);
router.get('/', getSubscriptions);

module.exports = router;