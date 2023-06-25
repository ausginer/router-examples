import { navigate } from '@ausginer/router';
import { Button } from '@rmwc/button';
import type { ReactElement } from 'react';
import { Role, user } from './utils.js';

export default function Login(): ReactElement {
  return (
    <section className="login">
      <Button
        onClick={() => {
          user.login(Role.USER);
          navigate('/profile');
        }}
      >
        Log in as user
      </Button>
      <Button
        onClick={() => {
          user.login(Role.ADMIN);
          navigate('/admin');
        }}
      >
        Log in as admin
      </Button>
    </section>
  );
}
