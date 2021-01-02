import { useSession } from 'next-auth/client';

import MainApp from 'components/MainApp';

function IndexPage() {
  const [session, loading] = useSession();

  return (
    <>
      {session && <MainApp />}
      {!session && (
        <p>
          <a href="/api/auth/signin">Sign in</a>
        </p>
      )}
    </>
  );
}

export default IndexPage;
