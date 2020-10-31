import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  array : any [] = [];
  isCollapsed: boolean = true;
  constructor() { }

  ngOnInit(): void {
    for (let i=0; i<100; i++){
      this.array.push(i);
    }
  }

}
