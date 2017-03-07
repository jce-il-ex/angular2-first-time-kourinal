import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  myList =[{id:1,txt:"oogabooga"},{id:2,txt:"herpderp"},{id:3}];
  //x=3;
  constructor() {}

  ngOnInit() {
  }

}
