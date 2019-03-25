import { ListComponent } from './component/list/list.component';
import { UpdateComponent } from './component/update/update.component';
import { CreateComponent } from './component/create/create.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'create', component: CreateComponent, canActivate: [AuthGuard]
  },
  {
    path: 'update/:id', component: UpdateComponent, canActivate: [ AuthGuard ]
  },
  {
    path: 'list', component: ListComponent, canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
