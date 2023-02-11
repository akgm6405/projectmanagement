import { NgModule } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ApilogsComponent } from './apilogs/apilogs.component';
import { transactionsRoutingModule } from './transactions-routing.module';
import { SharedModule } from '../shared/modules/shared.module';


@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        NgSelectModule,
        transactionsRoutingModule,
        SharedModule,
        CommonModule
        
    ],
    declarations: [
        ApilogsComponent ,
    ],
   
})
export class transactionsModule { };
  