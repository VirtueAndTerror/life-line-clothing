import StripeCheckout, { Token } from 'react-stripe-checkout';

type SCBProps = {
  price: number;
};
const StripeCheckoutButton = ({ price }: SCBProps) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_SECRET_KEY;

  if (!publishableKey)
    throw Error('Please set the Stripe envinomental variable.');

  const onToken = (token: Token) => {
    fetch('/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: priceForStripe,
        token,
      }),
    })
      .then((response) => {
        alert('Payment Successful');
      })
      .catch((error) => {
        console.error(error);
        alert(
          'There was an issue with your payment. Pleasee make sure you use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Life Line Clothing Ltd.'
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      currency='USD'
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
