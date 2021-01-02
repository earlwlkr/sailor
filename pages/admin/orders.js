import { useSession } from 'next-auth/client';

import OrderManagement from 'components/admin/OrderManagement';

function OrdersPage() {
  const [session, loading] = useSession();

  return (
    <>
      {session && <OrderManagement />}
      {!session && (
        <p>
          <a href="/api/auth/signin">Sign in</a>
        </p>
      )}
    </>
  );
}

export default OrdersPage;
