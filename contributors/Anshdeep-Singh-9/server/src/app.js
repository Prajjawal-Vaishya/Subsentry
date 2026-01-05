2;
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());
app.use(express.json());

import routes from "./route.js";

app.get('/', (_, res) => {
  res.send('SubSentry API running');
});

app.use("/api", routes);

export default app;
