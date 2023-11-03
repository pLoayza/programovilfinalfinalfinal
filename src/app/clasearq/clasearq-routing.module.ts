import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClasearqPage } from './clasearq.page';

const routes: Routes = [
  {
    path: '',
    component: ClasearqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasearqPageRoutingModule {}
