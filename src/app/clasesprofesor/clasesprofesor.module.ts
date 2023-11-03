import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClasesprofesorPageRoutingModule } from './clasesprofesor-routing.module';

import { ClasesprofesorPage } from './clasesprofesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClasesprofesorPageRoutingModule
  ],
  declarations: [ClasesprofesorPage]
})
export class ClasesprofesorPageModule {}
