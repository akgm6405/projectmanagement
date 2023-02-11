import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $ :any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(public router :Router) { }

  ngOnInit(): void {


  }


//   toggleSidebar() {
//     const dom: any = document.querySelector('body');
//     event.stopPropagation();
//     dom.classList.toggle('sidemenu-open');
// }

  ClearSession(){
    sessionStorage.clear();
    this.router.navigate([''])  ;
    if (sessionStorage.getItem("hk")) {
      $('#logout').show();
      $('#sidemenu').show();
      
    }else
    {
      $('#logout').hide();
      $('#sidemenu').hide();
    }
  }


}
