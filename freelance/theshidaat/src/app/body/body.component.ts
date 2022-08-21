import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  count: any = 200;
  duration: any = 5000;
  constructor() { }

  ngOnInit(): void {
  }

}
