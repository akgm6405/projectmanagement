import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project.component';



const routes: Routes = [

    {
        path: '', component: ProjectComponent,
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
    
    export class projectRoutingModule {}