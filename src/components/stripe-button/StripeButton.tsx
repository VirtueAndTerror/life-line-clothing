import StripeCheckout from 'react-stripe-checkout';

type SCBProps = {
  price: number;
};
const StripeCheckoutButton = ({ price }: SCBProps) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51IPyIbJ10HjkFVWcNii8Y5nwoeRkhz8rZYyR6cOGmnMSlUJRFSOFW1HpdGaCJxN3kxp01mJYnJ4J95BbJaFbqFwe004MciZ0TT';

  const onToken = (token: any) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
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
