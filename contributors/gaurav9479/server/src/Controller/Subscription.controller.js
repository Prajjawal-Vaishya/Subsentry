import { Subscription } from "../models/subscription.model.js";

export const createSubscription = async (req, res) => {
    try {
        const {
            name,
            amount,
            billingCycle,
            renewalDate,
            isTrial,
            trialEndsAt,
            source
        } = req.body;

        if (!name || !amount || !billingCycle || !renewalDate) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        if (isTrial && !trialEndsAt) {
            return res.status(400).json({ error: 'trialEndsAt is required when isTrial is true' });
        }

        const userId = req.user?.id;
        if (!userId) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        const newSubscription = await Subscription.create({
            userId,
            name,
            amount,
            billingCycle,
            renewalDate,
            isTrial,
            trialEndsAt,
            source
        });
        return res.status(201).json({
            message: 'Subscription created successfully',
            subscription: newSubscription
        });

    } catch (error) {
        console.error("Create Error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export const getSubscription = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        const subs = await Subscription.find({ userId })
            .sort({ renewalDate: 1 })
            .select('-__v');

        return res.status(200).json({ subscriptions: subs });
    } catch (error) {
        console.error("Get Error:", error);
        return res.status(500).json({ error: 'Failed to get subscriptions' });
    }
}
