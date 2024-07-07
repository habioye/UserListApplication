import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  {path:'',component:UserComponent},
  {path:'create',component:CreateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
