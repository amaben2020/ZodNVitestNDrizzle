'use client';
import { signIn, signOut, useSession } from 'next-auth/react';

const LoginBtn = () => {
  const data = useSession();
  return (
    <div>
      {data.data?.user?.email ? (
        <button onClick={() => signOut()}>Sign Out</button>
      ) : (
        <button onClick={() => signIn()}> Sign In</button>
      )}
    </div>
  );
};

export default LoginBtn;
