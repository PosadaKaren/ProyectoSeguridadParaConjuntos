import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControlPageRoutingModule } from './control-routing.module';

import { ControlPage } from './control.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ControlPage]
})
export class ControlPageModule {}
