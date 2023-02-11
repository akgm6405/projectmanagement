import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './services/auth-guard.service';





const routes: Routes = [
    {path: 'layout', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)},
    {path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},

  ];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }