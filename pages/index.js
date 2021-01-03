import { useAuthState } from 'contexts/AuthContext';
import AdminDashboard from 'components/admin/AdminDashboard';

function IndexPage() {
  const { userToken, isLoading } = useAuthState();
  if (isLoading) {
    return 'Loading';
  }
  console.log('userToken', userToken);

  return (
    <>
      {userToken && <AdminDashboard />}
      {!userToken && (
        <p>
          <a href="/auth/login">Sign in</a>
        </p>
      )}
    </>
  );
}

export default IndexPage;
