import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MenusComponent } from './layout/menus/menus.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { BranchComponent } from './masters/branch/branch.component';
import { DepartmentComponent } from './masters/department/department.component';
import { RoleComponent } from './masters/role/role.component';
import { LeavetypeComponent } from './masters/leavetype/leavetype.component';
import { ApprovaltypeComponent } from './masters/approvaltype/approvaltype.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ContactusComponent } from './dashboard/contactus/contactus.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { AddEditEmployeeComponent } from './employees/add-edit-employee/add-edit-employee.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'home', component: HomeComponent},
  {path: 'branch', component: BranchComponent},
  {path: 'department', component: DepartmentComponent},
  {path: 'role', component: RoleComponent},
  {path: 'leavetype', component: LeavetypeComponent},
  {path: 'approval', component: ApprovaltypeComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'addeditemployee', component: AddEditEmployeeComponent}


  ];
  
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenusComponent,
    DashboardComponent,
    BranchComponent,
    DepartmentComponent,
    RoleComponent,
    LeavetypeComponent,
    ApprovaltypeComponent,
    HomeComponent,
    ContactusComponent,
    EmployeeComponent,
    AddEditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
