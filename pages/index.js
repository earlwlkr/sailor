import { useAuthState } from 'contexts/AuthContext';
import MainApp from 'components/MainApp';

function IndexPage() {
  const { user } = useAuthState();

  return (
    <>
      {user && <MainApp />}
      {!user && (
        <p>
          <a href="/auth/login">Sign in</a>
        </p>
      )}
    </>
  );
}

export default IndexPage;
