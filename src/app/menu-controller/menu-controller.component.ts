import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu-controller',
  templateUrl: './menu-controller.component.html',
  styleUrls: ['./menu-controller.component.scss']
})
export class MenuControllerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.fn.clickers = function(){ 
      alert('You have successfully defined the function!'); 
      console.log("Hello There");
  }
  $(".dTop").click(function(){
      $.fn.clickers();
  });
  }

}
