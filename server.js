var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const STRIPE_API_KEY = process.env.REACT_APP_STRIPE_SECRET_KEY;
if (!STRIPE_API_KEY)
    throw new Error('Please set your STRIPE_API_KEY environment variable');
const stripe = new Stripe(STRIPE_API_KEY, {
    apiVersion: '2020-08-27',
    maxNetworkRetries: 1,
});
/* Payment Routes */
app.post('/payment', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token, amount } = req.body;
        const charge = yield stripe.charges.create({
            amount,
            source: token.id,
            currency: 'usd',
            description: 'My First Test Charge (created for API docs)',
        });
        console.log({ charge });
        res.status(200).send({ success: true, charge });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ success: false, error });
    }
}));
const server = app.listen(port, () => {
    console.info(`Server running on port ${port}`);
});
export default server;
