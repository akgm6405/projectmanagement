import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page.component';


const routes: Routes = [

    {
        path: '', component: PageComponent,
        children: [
            // { path: '', component: ListComponent },
            // { path: 'add', component: AddEditComponent },
            // { path: 'edit/:id', component: AddEditComponent }
        ]
    
    }
       ];
    
    
    @NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
    
    export class pageRoutingModule {}