import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

const appRoutes:Routes = [
    {path: '', loadChildren: 'src/app/modules/login/login.module#LoginModule'},
    {path: 'register', loadChildren: 'src/app/modules/register/register.module#RegisterModule'},
    {path: 'inbox', loadChildren: 'src/app/modules/inbox/inbox.module#InboxModule'},
    {path: 'login', loadChildren: 'src/app/modules/login/login.module#LoginModule'},
    {path: 'login/:userName', loadChildren: 'src/app/modules/login/login.module#LoginModule'},
    {path: '**', redirectTo: ''}
];

//export const RoutingModule = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CustomRouterModule {
}