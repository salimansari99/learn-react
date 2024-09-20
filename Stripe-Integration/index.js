// server.js
const express = require('express');
const Stripe = require('stripe');
const bodyParser = require('body-parser');
const cors = require('cors');

const stripe = Stripe('sk_test_51Q0LqFAxCFZN0gstbnrk1PuJpIixIN9gE8PhavhRhudYt21fQDdXBMuvdcErE2SKq0R62adeQS6WBp9a3sVqlY8m00eoboN5jj'); // Replace with your secret key

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // Amount in cents
      currency: 'usd',
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
