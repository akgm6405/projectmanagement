
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


// import * as $ from 'jquery'
declare var $: any

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {
  showMenu: string;
  allAssignedMenus = [];
  allMainMenus = [];
  @Output() collapsedEvent = new EventEmitter<boolean>();

  constructor(public router: Router) {
    this.router.events.subscribe(val => {
      this.allMainMenus = JSON.parse(sessionStorage.getItem('mm'));
      this.allAssignedMenus = JSON.parse(sessionStorage.getItem('am'));
    });

   }

  ngOnInit(): void {
    this.showMenu = '';
    this.allMainMenus = JSON.parse(sessionStorage.getItem('mm'));
    this.allAssignedMenus = JSON.parse(sessionStorage.getItem('am'));

    $(function () {
      $(".sidebar").hover(function () {
        if ($(".sidebar").css('width') == '270px') {
          $("#minilogo").show();
          $("#mainlogo").hide();
          $("#mainlogoname").hide();
        }
        else {
          $("#mainlogo").show();
          $("#mainlogoname").show();
          $("#minilogo").hide();
        }
      });

      $(".sidebar").mouseleave(function () {
        $('.subMenus').removeClass('d-block')

      })

    });
    $('body').addClass('sidebar-icon');
  }


  eventCalled() {
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  toggleCollapsed() {
  }

  getRoute() {
    this.router.navigate([sessionStorage.getItem('lp')])
  }

}
