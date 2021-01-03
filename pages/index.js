import { useAuthState } from 'contexts/AuthContext';
import MainApp from 'components/MainApp';

function IndexPage() {
  const { userToken, isLoading } = useAuthState();
  if (isLoading) {
    return 'Loading';
  }
  console.log('userToken', userToken);

  return (
    <>
      {userToken && <MainApp />}
      {!userToken && (
        <p>
          <a href="/auth/login">Sign in</a>
        </p>
      )}
    </>
  );
}

export default IndexPage;
