import { loadRemoteModule } from '@angular-architects/native-federation';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => loadRemoteModule({
      remoteName: 'demo-mfe',
      exposedModule: './Component'
    })
      .then(esm => {
        console.log('esm:', esm);
        return esm.AppComponent;
      })
  }
];
