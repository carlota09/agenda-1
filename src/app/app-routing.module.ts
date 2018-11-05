import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyDashComponent } from './my-dash/my-dash.component';
import { MyTableComponent } from './my-table/my-table.component';
import { MyTreeComponent } from './my-tree/my-tree.component';
import { NewFormComponent } from './new-form/new-form.component';

const routers: Routes = [
  { path: '', component: MyDashComponent },
  { path: 'lista', component: MyTableComponent },
  { path: 'nuevo', component: NewFormComponent },
  { path: 'arbol', component: MyTreeComponent },
  { path: 'dd', component: MyDashComponent },
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


