import StripeCheckout from 'react-stripe-checkout';

type SCBProps = {
  price: number;
};
const StripeCheckoutButton = ({ price }: SCBProps) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_SECRET_KEY;

  if (!publishableKey)
    throw Error('Please set the Stripe envinomental variable.');

  const onToken = (token: any) => {
    console.log(token);
    alert('Payment Successful');
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
