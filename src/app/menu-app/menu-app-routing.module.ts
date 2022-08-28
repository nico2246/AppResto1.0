import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuAppPage } from './menu-app.page';

const routes: Routes = [
  {
    path: '',
    component: MenuAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuAppPageRoutingModule {}
