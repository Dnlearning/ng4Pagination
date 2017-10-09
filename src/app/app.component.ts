import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  news=[];
  options:number[]=[5,10,20];
  p:number=1;
  itemsPerPage:number=5;

  ngOnInit(){
    for(let i=1;i<101;i++){
      this.news.push('this is new '+ i);
    }
  }


  getSelectedValue(selected){
    console.log(selected.value);
    this.itemsPerPage=selected.value;
  }

}
