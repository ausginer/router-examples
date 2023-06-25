import { Router } from '@ausginer/router';
import type { ReactElement } from 'react';
import Admin from './Admin.js';
import Login from './Login.js';
import Main from './Main.js';
import Profile from './Profile.js';
import { Role, user } from './utils.js';

export type AuthorizedRouteExtension = Readonly<{
  requiredRole?: readonly Role[];
}>;

export type RedirectCommand = Readonly<{
  notify?: string;
  redirect: string;
}>;

export function isRedirectCommand(maybeCommand: unknown): maybeCommand is RedirectCommand {
  return !!maybeCommand && typeof maybeCommand === 'object' && 'redirect' in maybeCommand;
}

const permissionError = "You don't have permissions to access this page";

function redirectHome(role: Role | undefined) {
  switch (role) {
    case Role.USER:
      return '/profile';
    case Role.ADMIN:
      return '/admin';
    default:
      return '/login';
  }
}

const router = new Router<ReactElement | RedirectCommand, AuthorizedRouteExtension>([
  {
    async action({ branch: [route], next, url }) {
      if (!user.role || !route.requiredRole?.includes(user.role)) {
        return { notify: permissionError, redirect: redirectHome(user.role) };
      }

      const result = await next();

      if (isRedirectCommand(result)) {
        return result;
      }

      return <Main>{result}</Main>;
    },
    children: [
      {
        action() {
          return { redirect: redirectHome(user.role) };
        },
        path: '',
      },
      {
        action() {
          return <Admin />;
        },
        path: '/admin',
        requiredRole: [Role.ADMIN],
      },
      {
        action() {
          return <Profile />;
        },
        path: '/profile',
        requiredRole: [Role.USER, Role.ADMIN],
      },
    ],
    path: '',
  },
  {
    action() {
      return <Login />;
    },
    path: '/login',
  },
  {
    action() {
      user.logout();
      return { redirect: '/login' };
    },
    path: '/logout',
  },
  {
    action() {
      return { notify: '404: Page is not found', redirect: '/' };
    },
    path: '*',
  },
]);

export default router;
