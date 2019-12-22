import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-pricing-options',
  templateUrl: './pricing-options.component.html',
  styleUrls: ['./pricing-options.component.scss']
})
export class PricingOptionsComponent implements OnInit {

  pricing: any [] = [];
  constructor(private services:ServiceService) { }

ngOnInit(){
  this.pricingData();
}
pricingData(){
  this.services.getJSON().subscribe(data=>{console.log(data,".....res");
  if(data){
    this.pricing=data.dataList;
    console.log("pricing--------------------",this.pricing);
    
  }else{
    console.log("error");
  }
});
}
}
