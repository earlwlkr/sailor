import AdminLayout from 'components/layout/AdminLayout';
import ExpenseManagement from 'components/admin/ExpenseManagement';

function ExpensesPage() {
  return (
    <AdminLayout>
      <ExpenseManagement />
    </AdminLayout>
  );
}

export default ExpensesPage;
