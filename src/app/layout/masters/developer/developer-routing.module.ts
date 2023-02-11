import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeveloperComponent } from './developer.component';


const routes: Routes = [

{
    path: '', component: DeveloperComponent,
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

export class developerRoutingModule {}