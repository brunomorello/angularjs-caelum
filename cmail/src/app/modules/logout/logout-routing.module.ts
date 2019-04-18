import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './logout.component';

const logoutRoutes: Routes = [
    {path: '', component: LogoutComponent}
]

@NgModule({
    imports: [
        RouterModule.forChild(logoutRoutes)
    ]
})

export class LogoutRoutingModule { }