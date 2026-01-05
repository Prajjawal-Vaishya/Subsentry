import { Router } from "express";
import { createSubscription, getSubscription } from "../Controller/Subscription.controller.js";
import requireAuth from "../middleware/requireAuth.js";

const router = Router();

router.get("/", requireAuth, getSubscription);
router.post("/", requireAuth, createSubscription);

export default router;
