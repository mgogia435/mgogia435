import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerFixed: string = '';
  menus: any[] = [];
  targetHash: string = 'home';
  barClass: string = 'fa-bars';
  menuActive: string = 'hide';

  constructor() { }

  ngOnInit() {
    this.addMenus();
  }

  addMenus() {
    this.menus = [
      {'id':'first','href':"home",'name':'Home'},
      {'id':'second','href':"about",'name':'About us'},
      {'id':'third','href':"services",'name':'Services'},
      {'id':'fourth','href':"discography",'name':'Discography'},
      {'id':'fifth','href':"events",'name':'Events'},
      {'id':'sixth','href':"contact",'name':'Contact'}
    ]
  }

  selectedMenu(event : any) {
    console.log("event");
    console.log(event);
    this.targetHash = event.target.hash;
  }

  @HostListener('window:scroll', ['$event'])
  onResize(event: any) {
    //console.log("document.documentElement.scrollTop " + document.documentElement.scrollTop);
    if(document.documentElement.scrollTop >= 230) this.headerFixed = 'headerfixed';
    else this.headerFixed = '';
    const viewHeight = window.innerHeight;
    for (var menu of this.menus) {
      const element = document.getElementById(menu['href']);
      if (element != null) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < viewHeight / 2) {
          this.targetHash = menu['href'];
          console.log(this.targetHash);
        }
      } else {}
    }
  }

  toggleBars(classed: any) {
    this.barClass = (classed == 'fa-bars') ? 'fa-bars-staggered' : 'fa-bars';
    this.menuActive = (classed == 'fa-bars') ? 'show' : 'hide';
  }

}
