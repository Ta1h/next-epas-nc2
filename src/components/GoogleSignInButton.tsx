import { FC, ReactNode } from 'react';
import { Button } from './ui/Button';
import { signIn } from 'next-auth/react';


interface GoogleSignInButtonProps {
  children: ReactNode;
}
const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  const loginWithGoogle = () => signIn('google', {callbackUrl: 'http://localhost:3000/userDashboard/dashboard'});

  return (
    <Button variant='google' onClick={loginWithGoogle} className='w-full'>
      {children}
    </Button>
  );
};

export default GoogleSignInButton;