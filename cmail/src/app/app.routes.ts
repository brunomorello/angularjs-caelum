import { Routes, RouterModule } from "@angular/router";
import { InboxComponent } from "./modules/inbox/inbox.component";
import { LoginComponent } from "./modules/login/login.component";
import { RegisterComponent } from "./modules/register/register.component";

const appRoutes:Routes = [
    {path: '', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'inbox', component: InboxComponent},
    {path: 'login', component: LoginComponent},
    {path: 'login/:id', component: LoginComponent}
    //{path: '**', redirectTo: ''}
];

export const RoutingModule = RouterModule.forRoot(appRoutes);