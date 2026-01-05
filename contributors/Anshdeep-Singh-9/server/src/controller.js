import {Subscription}  from "./models/Subscription.js";

const addSubscription= async (req, res) => {
    const {userId, name, amount, billingCycle, renewalDate, isTrial, source} = req.body;

    if(!userId || !name || !amount || !billingCycle || !renewalDate || !isTrial || !source){
        return res.json({error: "Missing fields!"});
    }

    const data= await Subscription.create(req.body);
    console.log(data);

    return res.json({success: "Subscription added successfully!"});     

}

const fetchSubscriptions= async (req, res) => {
    const {userId} = req.body;

    if(!userId){
        return res.json({error: "UserID required!"});
    }

    const subs= await Subscription.find(
        {userId: userId},
        {name:1, amount:1, billingCycle:1, renewalDate:1, _id: 0}
    );

    if(!subs){
        return res.json({error: "Failes to fetch subscriptions!"});
    }

    if(subs.length == 0){
        return res.json({error: "No data found!"});
    }

    return res.json(subs);
}

export {addSubscription, fetchSubscriptions};