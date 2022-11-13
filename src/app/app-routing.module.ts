import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './Components/employees/employees.component';
import { PeopleComponent } from './Components/people/people.component';
import { TeamsComponent } from './Components/teams/teams.component';
import { PayrollComponent } from './Components/payroll/payroll.component';
import { HiringComponent } from './Components/hiring/hiring.component';
import { ListViewComponent } from './Components/list-view/list-view.component';


const routes: Routes = [
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'employees', component: EmployeesComponent},
  {
    path: 'people',
    loadChildren: () => import('./people/people.module').then(m => m.PeopleModule)
  },
  {path: 'statistics', component: TeamsComponent},
  {
    path: 'payroll',
    loadChildren: () => import('./payroll/payroll.module').then(m => m.CoupensModule)
  },
  {path: 'hiring', component: HiringComponent},
  {path:'list-view',component:ListViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
