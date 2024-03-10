import { Routes, RouterModule } from '@angular/router';
import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';

const RUTAS:Routes = [
  {
    path: 'photos',
    component: FotosComponent
  },

  {
    path: 'upload',
    component: CargaComponent
  },

  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'photos'
  }
];

export const APP_ROUTES = RouterModule.forRoot(RUTAS, { useHash: true });