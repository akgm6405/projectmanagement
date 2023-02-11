import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { mappingRoutingModule } from './apimapping-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        //UsersRoutingModule
        mappingRoutingModule
    ],
    declarations: [
       // ApilogsComponent
        // LayoutComponent,
        // ListComponent,
        // AddEditComponent
    ]
})

export class mappingModule {}