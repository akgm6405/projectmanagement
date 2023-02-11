import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { ApilogsComponent } from "./apilogs/apilogs.component";





const routes: Routes = [
    
    {path:'api' , component: ApilogsComponent},
    
  ];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class transactionsRoutingModule { }