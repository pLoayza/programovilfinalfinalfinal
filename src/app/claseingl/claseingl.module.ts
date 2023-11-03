import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClaseinglPageRoutingModule } from './claseingl-routing.module';

import { ClaseinglPage } from './claseingl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClaseinglPageRoutingModule
  ],
  declarations: [ClaseinglPage]
})
export class ClaseinglPageModule {}
