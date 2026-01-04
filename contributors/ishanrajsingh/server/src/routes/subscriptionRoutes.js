// contributors/ishanrajsingh/server/src/routes/subscriptionRoutes.js

const express = require('express');
const router = express.Router();

const {
  createSubscription,
  getSubscriptions,
} = require('../controllers/subscriptionController');

// IMPORTANT: Use existing auth middleware from the base project
const { protect } = require('../middleware/auth');

// All subscription routes require authentication
router.use(protect);

router
  .route('/')
  .post(createSubscription)   // POST /api/subscriptions
  .get(getSubscriptions);     // GET /api/subscriptions

module.exports = router;
