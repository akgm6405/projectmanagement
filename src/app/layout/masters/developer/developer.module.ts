import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { developerRoutingModule } from './developer-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        //UsersRoutingModule
        developerRoutingModule
    ],
    declarations: [
       // ApilogsComponent
        // LayoutComponent,
        // ListComponent,
        // AddEditComponent
    ]
})


export class developerModule {}