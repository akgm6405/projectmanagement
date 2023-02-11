import { NgModule } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
// used to create fake backend
//import { fakeBackendProvider } from './_helpers';
import { AppRoutingModule } from './app-routing.module';
//import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
//import { AlertComponent } from './components';
// import { HomeComponent } from './layout/masters/home';
//import { ApilogsComponent } from './apilogs/apilogs/apilogs.component'
// import { DeveloperComponent } from './layout/masters/developer/developer.component';
// import { ProjectComponent } from './layout/masters/project/project.component';
// import { PageComponent } from './layout/masters/page/page.component';
//import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
// import { ApimappingComponent } from './layout/masters/apimapping/apimapping.component';
// import { ApilogsComponent } from './layout/Transactions/apilogs/apilogs.component';
// import { HeaderComponent } from './layout/components/header/header.component';
// import { FooterComponent } from './layout/components/footer/footer.component';
import { NgSelectModule } from '@ng-select/ng-select';;
// import { LayoutComponent } from './layout/layout.component'
import { SharedModule } from './layout/shared/modules/shared.module';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        //NgSelectModule,
        FormsModule,
        NgSelectModule,
        SharedModule,
        CommonModule
    ],
    declarations: [
        AppComponent,
            
    ],
    providers: [DatePipe,DeviceDetectorService],

        // DeviceDetectorService,
        // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        //fakeBackendProvider
    
    bootstrap: [AppComponent]
})
export class AppModule { };