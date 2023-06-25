import { Typography } from '@rmwc/typography';
import type { ReactElement } from 'react';
import { user } from './utils.js';

export default function Profile(): ReactElement {
  return (
    <div className="profile">
      <Typography tag="header" use="headline2">
        My profile
      </Typography>
      <Typography tag="section" use="body1">
        Hi, {user.name}
      </Typography>
    </div>
  );
}
