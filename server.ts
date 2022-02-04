import 'dotenv/config';
import express from 'express';
import path from 'path';
import cors from 'cors';
import Stripe from 'stripe';

const app = express();
const port = process.env.PORT || 5000;

/* Middleware Config */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build, index.html'));
  });
}

/* Stripe Config */
const SRIPE_SECRET_KEY = process.env.REACT_APP_STRIPE_SECRET_KEY;

if (!SRIPE_SECRET_KEY)
  throw new Error('Please set your SRIPE_SECRET_KEY environment variable');

const stripe = new Stripe(SRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
  maxNetworkRetries: 1,
});

/* Payment Routes */
app.post('/payment', async (req, res) => {
  try {
    const { token, amount } = req.body;
    const charge = await stripe.charges.create({
      amount,
      source: token.id,
      currency: 'usd',
      description: 'My First Test Charge (created for testing)',
    });

    console.log({ charge });
    res.status(200).send({ success: true, charge });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, error });
  }
});

const server = app.listen(port, () => {
  console.info(`Server running on port ${port}`);
});

export default server;
