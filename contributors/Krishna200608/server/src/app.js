import cors from 'cors';
import express from 'express';
import { clerkMiddleware, getAuth } from '@clerk/express';
import subscriptionRoutes from './routes/subscription.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

// Clerk authentication middleware - adds auth info to req
app.use(clerkMiddleware());

// Middleware to extract user from Clerk auth and attach to req.user
app.use((req, res, next) => {
  const auth = getAuth(req);
  if (auth && auth.userId) {
    req.user = { id: auth.userId };
  }
  next();
});

app.get('/', (_, res) => {
  res.send('SubSentry API running');
});

app.use('/api/subscriptions', subscriptionRoutes);

export default app;
