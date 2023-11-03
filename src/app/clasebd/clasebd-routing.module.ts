import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClasebdPage } from './clasebd.page';

const routes: Routes = [
  {
    path: '',
    component: ClasebdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasebdPageRoutingModule {}
