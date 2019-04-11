import { Routes, RouterModule } from "@angular/router";
import { InboxComponent } from "./models/inbox/inbox.component";
import { LoginComponent } from "./models/login/login.component";
import { RegisterComponent } from "./models/register/register.component";

const appRoutes:Routes = [
    {path: '', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'inbox', component: InboxComponent},
    {path: '**', redirectTo: ''}
];

export const RoutingModule = RouterModule.forRoot(appRoutes);