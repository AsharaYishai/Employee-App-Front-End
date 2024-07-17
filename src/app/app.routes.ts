import { Routes } from '@angular/router';
import { ManageEmpComponent } from './page/manage-emp/manage-emp.component';
import { ViewEmployeeComponent } from './page/view-employee/view-employee.component';

export const routes: Routes = [
    {
        path:"add-employee",
        component:ManageEmpComponent
    },
    {
        path:"view-all-employee",
        component:ViewEmployeeComponent
    }
];
