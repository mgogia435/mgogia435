import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-discography',
  templateUrl: './discography.component.html',
  styleUrls: ['./discography.component.scss']
})
export class DiscographyComponent implements OnInit {
  @Input() fullyears: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
