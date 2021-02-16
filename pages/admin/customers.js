import AdminLayout from 'components/layout/AdminLayout';
import CustomerManagement from 'components/admin/CustomerManagement';

function CustomersPage() {
  return (
    <AdminLayout>
      <CustomerManagement />
    </AdminLayout>
  );
}

export default CustomersPage;
