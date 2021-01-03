import { useAuthState } from 'contexts/AuthContext';
import OrderManagement from 'components/admin/OrderManagement';

function OrdersPage() {
  const { user } = useAuthState();

  return (
    <>
      {user && <OrderManagement />}
      {!user && (
        <p>
          <a href="/auth/login">Sign in</a>
        </p>
      )}
    </>
  );
}

export default OrdersPage;
