import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerFixed: string = '';
  constructor() { }

  ngOnInit() {
  }

@HostListener('window:scroll', ['$event'])
onResize(event: any) {
  //console.log("document.documentElement.scrollTop " + document.documentElement.scrollTop);
  if(document.documentElement.scrollTop >= 230) this.headerFixed = 'headerfixed';
  else this.headerFixed = '';
}

}
