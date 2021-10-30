import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [{ path: 'menu', component: MenuComponent },
{ path: 'DetalledelItem', component: ItemDetailComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
