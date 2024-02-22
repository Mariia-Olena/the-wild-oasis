import Button from '../../ui/Button';
import { UseCheckout } from './useCheckout';

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = UseCheckout();

  return (
    <Button
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
      $variation='primary'
      $size='small'
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
