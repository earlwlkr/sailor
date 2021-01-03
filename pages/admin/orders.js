import AdminLayout from 'components/layout/AdminLayout';
import OrderManagement from 'components/admin/OrderManagement';

function OrdersPage() {
  return (
    <AdminLayout>
      <OrderManagement />
    </AdminLayout>
  );
}

export default OrdersPage;
