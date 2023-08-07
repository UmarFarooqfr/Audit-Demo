import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoScreenComponent } from './demo-screen/demo-screen.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'audit-form', pathMatch: 'full'
  },
  {
    path: 'audit-form',
    component: DemoScreenComponent
  },
  {
    path: 'table-form',
    component: TablesComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
