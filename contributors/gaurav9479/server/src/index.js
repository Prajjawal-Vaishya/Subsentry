import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './DB/index.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
import SubscriptionRoute from './Routes/subscription.route.js';

app.use('/api/subscriptions', SubscriptionRoute);

app.get('/api/health', (req, res) => {
    res.json({ status: 'OK' });
});



connectDB()
    .then(() => {
        app.listen(process.env.PORT || 9000, () => {
            console.log(`server is running at port: ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("MONGO db connection failed!!!", err);
    })
