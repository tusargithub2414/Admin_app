import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GrandChildrenComponent } from './grand-children/grand-children.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent },
  {path: 'grandchildren', component: GrandChildrenComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
