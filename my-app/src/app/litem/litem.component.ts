import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-litem',
  templateUrl: './litem.component.html',
  styleUrls: ['./litem.component.css']
})
export class LitemComponent implements OnInit {
  @Input() item;
  foo(){
    navigator.geolocation.getCurrentPosition(function(){},function(){});
    alert("herp derp");

  }
  constructor() { }

  ngOnInit() {
  }

}
