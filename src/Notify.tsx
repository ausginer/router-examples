import { Dialog, DialogActions, DialogButton, DialogContent, type DialogOnCloseEventT } from '@rmwc/dialog';
import { Icon } from '@rmwc/icon';
import type { PropsWithChildren, ReactElement } from 'react';

export type NotifyProps = Readonly<{
  resolve(): void;
}>;

export default function Notify({ children, resolve }: PropsWithChildren<NotifyProps>): ReactElement {
  return (
    <Dialog open={true} onClose={resolve}>
      <DialogContent className="permissions-error">
        <Icon icon="error" />
        <span>{children}</span>
      </DialogContent>
      <DialogActions>
        <DialogButton action="accept">Ok</DialogButton>
      </DialogActions>
    </Dialog>
  );
}
