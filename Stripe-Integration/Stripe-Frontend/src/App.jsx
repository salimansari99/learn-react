// App.js
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm'; // Your custom CheckoutForm component

// Load the publishable key from Stripe
const stripePromise = loadStripe('pk_test_51Q0LqFAxCFZN0gstZaphV1vjFHlEt3Kol4q7qCha1GtB3UYg0oozxIzmrp56JtpUaFeCIos1kC8sqBWQvPpvKhy900R0EErVrp');

function App() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}

export default App;
