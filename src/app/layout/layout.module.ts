import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuardService } from '@app/services/auth-guard.service';
import { LayoutRoutingModule } from './layout-routing.module';
import { DeviceDetectorService } from 'ngx-device-detector';
import { mastersModule } from './masters/masters.module';
import { transactionsModule } from './Transactions/transactions.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from './shared/modules/shared.module';


@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        FormsModule,
        mastersModule,
        transactionsModule,
        SharedModule,
        

     ],
   
    declarations: [LayoutComponent, SidebarComponent,HeaderComponent,FooterComponent],
    

    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers:[DeviceDetectorService, AuthGuardService]
 })
export class LayoutModule { }