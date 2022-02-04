import 'dotenv/config';
import express from 'express';
import path from 'path';
import cors from 'cors';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.REACT_APP_STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build, index.html'));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.info(`Server running on port ${port}`);
});

app.post('/payment', (req, res) => {
  const { token, amount } = req.body;
  const body = {
    source: token.id,
    amount,
    currency: 'usd',
  };

  stripe.charges.create(body, (stripeError, stripeRes) => {
    if (stripeError) {
      res.status(500).send({ error: stripeError });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});