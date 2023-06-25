import { Typography } from '@rmwc/typography';
import type { ReactElement } from 'react';
import { user } from './utils.js';

export default function Admin(): ReactElement {
  return (
    <div className="admin">
      <Typography tag="header" use="headline2">
        Admin panel
      </Typography>
      <Typography tag="section" use="body1">
        Welcome, admin {user.name}
      </Typography>
    </div>
  );
}
