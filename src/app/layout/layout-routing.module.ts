import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuardService } from '@app/services/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'masters', loadChildren: () => import('./masters/masters.module').then(m => m.mastersModule)},
            { path: 'transactions', loadChildren: () => import('./Transactions/transactions.module').then(m => m.transactionsModule)},
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
