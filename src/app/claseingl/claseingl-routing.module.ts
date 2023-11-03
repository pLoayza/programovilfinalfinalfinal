import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClaseinglPage } from './claseingl.page';

const routes: Routes = [
  {
    path: '',
    component: ClaseinglPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaseinglPageRoutingModule {}
