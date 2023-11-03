import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClasearqPageRoutingModule } from './clasearq-routing.module';

import { ClasearqPage } from './clasearq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClasearqPageRoutingModule
  ],
  declarations: [ClasearqPage]
})
export class ClasearqPageModule {}
