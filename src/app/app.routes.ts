import { loadRemoteModule } from '@angular-architects/module-federation';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => loadRemoteModule({
      type: 'manifest', // Angular >= 13
      remoteName: 'treeshaker-monorepo',
      exposedModule: './Component'
    })
      .then(esm => {
        console.log('esm:', esm);
        return esm['AppComponent'];
      })
  },
  {
    path: 'dummy',
    loadComponent: () => loadRemoteModule({
      type: 'manifest', // Angular >= 13
      remoteName: 'dummy',
      exposedModule: './Component'
    })
      .then(esm => {
        console.log('esm:', esm);
        return esm['AppComponent'];
      })
  }
];
