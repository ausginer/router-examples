import { addNavigationListener, navigate } from '@ausginer/router';
import { createRoot } from 'react-dom/client';
import Notify from './Notify.js';
import router, { isRedirectCommand } from './router.js';
import './styles.css';

const root = createRoot(document.getElementById('root')!);

addNavigationListener((path) => {
  router
    .resolve(path)
    .then(async (result) => {
      if (isRedirectCommand(result)) {
        if (result.notify) {
          await new Promise<void>((resolve) => {
            root.render(<Notify resolve={resolve}>{result.notify}</Notify>);
          });
        }

        navigate(result.redirect);
      } else if (result) {
        root.render(result);
      }
    })
    .catch((e: unknown) => {
      throw e;
    });
});

navigate(location.href);
