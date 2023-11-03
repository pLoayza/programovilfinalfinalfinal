import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClaseprogPageRoutingModule } from './claseprog-routing.module';

import { ClaseprogPage } from './claseprog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClaseprogPageRoutingModule
  ],
  declarations: [ClaseprogPage]
})
export class ClaseprogPageModule {}
