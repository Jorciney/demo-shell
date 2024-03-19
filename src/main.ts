import { initFederation } from '@angular-architects/native-federation';

initFederation('/assets/mf.manifest.json')
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
