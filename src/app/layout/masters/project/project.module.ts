import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { projectRoutingModule } from './project-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        //UsersRoutingModule
        projectRoutingModule
    ],
    declarations: [
       // ApilogsComponent
        // LayoutComponent,
        // ListComponent,
        // AddEditComponent
    ]
})

export class projectModule {}