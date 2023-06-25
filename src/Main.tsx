import { navigate } from '@ausginer/router';
import { Drawer, DrawerContent, DrawerHeader, DrawerSubtitle, DrawerTitle } from '@rmwc/drawer';
import { List, ListItem } from '@rmwc/list';
import {
  TopAppBar,
  TopAppBarActionItem,
  TopAppBarFixedAdjust,
  TopAppBarNavigationIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '@rmwc/top-app-bar';
import { useState } from 'react';
import type { PropsWithChildren, ReactElement } from 'react';

export type MainProps = Readonly<{}>;

export default function Main({ children }: PropsWithChildren<MainProps>): ReactElement {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <TopAppBar>
        <TopAppBarRow>
          <TopAppBarSection alignStart>
            <TopAppBarNavigationIcon icon="menu" onClick={() => setOpen(true)} />
            <TopAppBarTitle>Example App</TopAppBarTitle>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />
      <Drawer modal open={open} onClose={() => setOpen(false)}>
        <DrawerHeader>
          <DrawerTitle>@ausginer/react</DrawerTitle>
          <DrawerSubtitle>Example App</DrawerSubtitle>
        </DrawerHeader>
        <DrawerContent>
          <List>
            <ListItem
              onClick={() => {
                navigate('/profile');
                setOpen(false);
              }}
            >
              Profile
            </ListItem>
            <ListItem
              onClick={() => {
                navigate('/admin');
                setOpen(false);
              }}
            >
              Admin
            </ListItem>
            <ListItem
              onClick={() => {
                navigate('/logout');
                setOpen(false);
              }}
            >
              Logout
            </ListItem>
          </List>
        </DrawerContent>
      </Drawer>
      {children}
    </main>
  );
}
