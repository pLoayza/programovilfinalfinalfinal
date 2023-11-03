import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClasesprofesorPage } from './clasesprofesor.page';

const routes: Routes = [
  {
    path: '',
    component: ClasesprofesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasesprofesorPageRoutingModule {}
