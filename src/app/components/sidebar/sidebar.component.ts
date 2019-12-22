import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  setup: any [] = [];
  userlist: any [] = [];
  activeClass = false;

  constructor(private service:ServiceService, private route:Router) {  }


  responseFormData:any;
  ngOnInit() {
    console.log(this.service.getLoginFOrmData())
    if(!this.service.getLoginFOrmData() && !localStorage.getItem('id')){
      this.route.navigate(['/login']);
    }else {
      this.responseFormData=this.service.getLoginFOrmData();
      this.gettingDataFunctin();
    };
    
  }
  

gettingDataFunctin(){
  this.service.getJSON().subscribe(data=>{console.log(data,".....res");
  if(data){
    this.setup=data.data;
    this.userlist=data.userList;
  }else{
    console.log("error");
  }
});
}



signOut(){
  localStorage.removeItem("id");
  this.route.navigate(['/login'])
}

  // addActive(index){
  //   if(this.setup[index].id === index){
  //     this.activeClass = true;
  //   }
  // }

}
