import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuAppPageRoutingModule } from './menu-app-routing.module';

import { MenuAppPage } from './menu-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuAppPageRoutingModule
  ],
  declarations: [MenuAppPage]
})
export class MenuAppPageModule {}
