import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClasebdPageRoutingModule } from './clasebd-routing.module';

import { ClasebdPage } from './clasebd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClasebdPageRoutingModule
  ],
  declarations: [ClasebdPage]
})
export class ClasebdPageModule {}
