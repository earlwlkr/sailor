import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';

function IndexPage() {
  const router = useRouter();
  const [session, loading] = useSession();

  useEffect(() => {
    // if (!session) {
    //   router.push('/api/auth/signin');
    //   return;
    // }
  }, []);

  return (
    <>
      {session && <p>Signed in as {session.user.email}</p>}
      {!session && (
        <p>
          <a href="/api/auth/signin">Sign in</a>
        </p>
      )}
    </>
  );
}

export default IndexPage;
