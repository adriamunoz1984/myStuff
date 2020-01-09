import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-perp-test',
  templateUrl: './perp-test.component.html',
  styleUrls: ['./perp-test.component.scss','./main.css']
})
export class PerpTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function()
    {
       $(".but1").click(function()
       {
           
           $(".single-rb").css({"transform":"rotateY(90deg)","transition":"transform 1s linear"});  
           
           $(".rotating-box").css({"perspective":"800px", "transition":"perspective 1s linear"});
       });
       
       
       $(".but2").click(function()
       {
           $(".single-rb").css({"transform":"rotateY(180deg)","transition":"transform 1s linear"});  
           
           $(".rotating-box").css({"perspective":"800px", "transition":"perspective 1s linear"});
       });
       $(".but3").click(function()
       {
           $(".single-rb").css({"transform":"rotateY(-90deg)","transition":"transform 1s linear"});  
           
           $(".rotating-box").css({"perspective":"800px", "transition":"perspective 1s linear"});
       });
       $(".but4").click(function()
       {
           $(".single-rb").css({"transform":"rotateY(-180deg)","transition":"transform 1s linear"});  
           $(".rotating-box").css({"perspective":"800px","transition":"perspective 1s linear"});  
           
       });
       
        $(".but5").click(function()
       {
           $(".single-rb").css({"transform":"rotateX(-90deg)","transition":"transform 1s linear"});  
           
           $(".rotating-box").css({"perspective":"800px", "transition":"perspective 1s linear"});
       });
       $(".but6").click(function()
       {
           $(".single-rb").css({"transform":"rotateX(-180deg)","transition":"transform 1s linear"});  
           $(".rotating-box").css({"perspective":"800px","transition":"perspective 1s linear"});  
           
       });
       
        $(".but7").click(function()
       {
           $(".single-rb").css({"transform":"rotateX(90deg)","transition":"transform 1s linear"});  
           
           $(".rotating-box").css({"perspective":"800px", "transition":"perspective 1s linear"});
       });
       $(".but8").click(function()
       {
           $(".single-rb").css({"transform":"rotateX(180deg)","transition":"transform 1s linear"});  
           $(".rotating-box").css({"perspective":"800px","transition":"perspective 1s linear"});  
           
       });
       
        $(".but9").click(function()
       {
           $(".single-rb").css({"transform":"rotateZ(-90deg)","transition":"transform 1s linear"});  
           
           $(".rotating-box").css({"perspective":"800px", "transition":"perspective 1s linear"});
       });
       $(".but10").click(function()
       {
           $(".single-rb").css({"transform":"rotateZ(-180deg)","transition":"transform 1s linear"});  
           $(".rotating-box").css({"perspective":"800px","transition":"perspective 1s linear"});  
           
       }); 
       
       $(".but11").click(function()
       {
           $(".single-rb").css({"transform":"rotateZ(90deg)","transition":"transform 1s linear"});  
           
           $(".rotating-box").css({"perspective":"800px", "transition":"perspective 1s linear"});
       });
       $(".but12").click(function()
       {
           $(".single-rb").css({"transform":"rotateZ(180deg)","transition":"transform 1s linear"});  
           $(".rotating-box").css({"perspective":"800px","transition":"perspective 1s linear"});  
           
       }); 
       
       $(".but13").click(function()
       {
           $(".single-rb").css({"transform":"rotateY(-45deg)","transition":"transform 1s linear"});  
           
           $(".rotating-box").css({"perspective":"800px", "transition":"perspective 1s linear"});
       });
       $(".but14").click(function()
       {
           $(".single-rb").css({"transform":"rotateY(-135deg)","transition":"transform 1s linear"});  
           $(".rotating-box").css({"perspective":"800px","transition":"perspective 1s linear"});  
           
       }); $(".but15").click(function()
       {
           $(".single-rb").css({"transform":"rotateZ(45deg)","transition":"transform 1s linear"});  
           
           $(".rotating-box").css({"perspective":"800px", "transition":"perspective 1s linear"});
       });
       $(".but16").click(function()
       {
           $(".single-rb").css({"transform":"rotateZ(135deg)","transition":"transform 10s linear"});  
           $(".rotating-box").css({"perspective":"800px","transition":"perspective 10s linear"});  
           
       });
       
       
       
       $(".but17").click(function()
       {
           $(".single-rb").css({"transform":"rotateX(-45deg)","transition":"transform 1s linear ease-in-out"});  
           $(".rotating-box").css({"perspective":"800px","transition":"perspective 1s linear"});  
           
       });
       
          $(".but18").click(function()
       {
           $(".single-rb").css({"transform":"rotateY(340deg)","transition":"transform 5s linear ease-in-out"});  
           $(".rotating-box").css({"perspective":"800px","transition":"perspective 5s linear"});  
           
       });
       
   });
  }
}