import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';

const appRoutes:Routes = [
    {
        path: '', 
        loadChildren: 'src/app/modules/login/login.module#LoginModule'
    },
    {
        path: 'register', 
        loadChildren: 'src/app/modules/register/register.module#RegisterModule'        
    },
    {
        path: 'inbox', 
        loadChildren: 'src/app/modules/inbox/inbox.module#InboxModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'login', 
        loadChildren: 'src/app/modules/login/login.module#LoginModule'
    },
    {
        path: 'login/:userName', 
        loadChildren: 'src/app/modules/login/login.module#LoginModule'
    },
    {
        path: 'logout', 
        loadChildren: 'src/app/modules/logout/logout.module#LogoutModule'
    },
    {
        path: '**', 
        redirectTo: ''
    }
];

//export const RoutingModule = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuard
    ]
})
export class CustomRouterModule {
}