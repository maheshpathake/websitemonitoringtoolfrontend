import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './check/create/create.component';
import { EditComponent } from './check/edit/edit.component';
import { IndexComponent } from './check/index/index.component';
import { ViewComponent } from './check/view/view.component';

const routes: Routes = [
  { path: '', redirectTo: 'check/index', pathMatch: 'full'},
  { path: 'check/index', component: IndexComponent },
  { path: 'check/:checkId/view', component: ViewComponent },
  { path: 'check/create', component: CreateComponent },
  { path: 'check/:checkId/edit', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
