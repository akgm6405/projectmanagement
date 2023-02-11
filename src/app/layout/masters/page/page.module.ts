import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { pageRoutingModule } from './page-routing.module';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        //UsersRoutingModule
        pageRoutingModule
    ],
    declarations: [
       // ApilogsComponent
        // LayoutComponent,
        // ListComponent,
        // AddEditComponent
    ]
})

export class pageModule {}