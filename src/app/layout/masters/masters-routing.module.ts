import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { ApimappingComponent } from "./apimapping/apimapping.component";
import { DeveloperComponent } from "./developer/developer.component";
import { HomeComponent } from "./home";
import { PageComponent } from "./page/page.component";
import { ProjectComponent } from "./project/project.component";




const routes: Routes = [
    {path:'home' , component: HomeComponent  },
    {path:'developer' , component: DeveloperComponent  },
    {path:'project' , component: ProjectComponent },
    {path:'page' , component: PageComponent },
    {path:'mapping' , component: ApimappingComponent},
    
  ];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class mastersRoutingModule { }
  