import express from 'express';
import { addSubscription, fetchSubscriptions } from './controller.js';
const router = express.Router();

router.get("/healthCheck", (req, res) => {

    return res.json({health: "Working fine!"})

})

router.get("/subscriptions", fetchSubscriptions);
router.post("/subscriptions", addSubscription);

export default router;