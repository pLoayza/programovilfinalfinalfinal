import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClaseprogPage } from './claseprog.page';

const routes: Routes = [
  {
    path: '',
    component: ClaseprogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaseprogPageRoutingModule {}
