import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadUserComponent } from '../app/read-user/read-user.component';
import { UpdateUserComponent } from "../app/update-user/update-user.component";
import { CreateUserComponent } from "../app/create-user/create-user.component";

const routes: Routes = [

  {path: '', redirectTo: 'read-user', pathMatch: 'full'},
  {path:'read-users', component: ReadUserComponent},
  {path:'edit-users/:id', component: UpdateUserComponent},
  {path:'create-users', component: CreateUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
