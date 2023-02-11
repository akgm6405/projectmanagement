import { NgModule } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HomeComponent } from './home/home.component';
import { DeveloperComponent } from './developer/developer.component';
import { ProjectComponent } from './project/project.component';
import { PageComponent } from './page/page.component';
import { ApimappingComponent } from './apimapping/apimapping.component';
import { mastersRoutingModule } from './masters-routing.module';
import { SharedModule } from '../shared/modules/shared.module';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        NgSelectModule,
        mastersRoutingModule,
        SharedModule,
        CommonModule
        
    ],
    declarations: [
        HomeComponent,
        DeveloperComponent,
        ProjectComponent,
        PageComponent ,
        ApimappingComponent ,
       
    ],
   
})
export class mastersModule { };