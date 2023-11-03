import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'clases',
    loadChildren: () => import('./clases/clases.module').then( m => m.ClasesPageModule)
  },
  {
    path: 'scanner-qr',
    loadChildren: () => import('./scanner-qr/scanner-qr.module').then( m => m.ScannerQRPageModule)
  },
  {
    path: 'generar-qr',
    loadChildren: () => import('./generar-qr/generar-qr.module').then( m => m.GenerarQRPageModule)
  },
  {
    path: 'salida-alumno',
    loadChildren: () => import('./salida-alumno/salida-alumno.module').then( m => m.SalidaAlumnoPageModule)
  },
  {
    path: 'listaprofesores',
    loadChildren: () => import('./listaprofesores/listaprofesores.module').then( m => m.ListaprofesoresPageModule)
  },
  
  {
    path: 'construccion',
    loadChildren: () => import('./construccion/construccion.module').then( m => m.ConstruccionPageModule)
  },
  
  {
    path: 'homeprofesor',
    loadChildren: () => import('./homeprofesor/homeprofesor.module').then( m => m.HomeprofesorPageModule)
  },

  {
    path: 'claseprog',
    loadChildren: () => import('./claseprog/claseprog.module').then( m => m.ClaseprogPageModule)
  },
  
  {
    path: 'clasebd',
    loadChildren: () => import('./clasebd/clasebd.module').then( m => m.ClasebdPageModule)
  },
  {
    path: 'clasearq',
    loadChildren: () => import('./clasearq/clasearq.module').then( m => m.ClasearqPageModule)
  },
  {
    path: 'claseingl',
    loadChildren: () => import('./claseingl/claseingl.module').then( m => m.ClaseinglPageModule)
  },
  
  {
    path: 'clasesprofesor',
    loadChildren: () => import('./clasesprofesor/clasesprofesor.module').then( m => m.ClasesprofesorPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page404/page404.module').then( m => m.Page404PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
