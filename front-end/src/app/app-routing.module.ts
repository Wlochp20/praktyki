import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationPanelComponent } from './views/administration-panel/administration-panel.component';
import { EnrollmentComponent } from './views/enrollment/enrollment.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const routes: Routes = [
  { path:'zapisy', component: EnrollmentComponent },
  { path:'logowanie', component: LoginComponent },
  { path:'rejstracja', component: RegisterComponent },
  { path:'panel-administracyjny', component: AdministrationPanelComponent },
  { path:'', redirectTo:'/zapisy', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
