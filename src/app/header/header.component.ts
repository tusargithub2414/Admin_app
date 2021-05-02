import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpluseService } from '../api/empluse.service';
import { IMenu, ISubMenu, IChildMenu} from '../models/menu';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public showMyContainer = true;
  public grandChildren;
  menues: IMenu[];
  public navigateFromMenue= false;
  constructor( private empluseService: EmpluseService, private router:Router, private sharedService : SharedService ) { }

  ngOnInit(): void {
    this.getMenu();
  }

getMenu(){
 this.empluseService.getLeftMenuCategories().subscribe((res) =>{
console.log(res);
this.menues= res;
  this.openLeftMenu();
 })
}
gotToGrandChild(element: IChildMenu){
  this.navigateFromMenue = true;
this.sharedService.changeCurrentGrand(element);
  this.router.navigate(['../grandchildren']);
}

openLeftMenu(){

  this.sharedService.currentGrandChildren.subscribe((res)=>{
    if(!this.navigateFromMenue){
      this.menues.forEach((element, index)=>{
        element.children.forEach((childElement, index2) => {
          const value =  childElement.children1.filter(element => element.ModuleName === res.ModuleName);
          if(value[0]){
            let clickelement: HTMLElement = document.getElementById('main_menue'.concat(index.toString())) as HTMLElement;
            let clickChildelement: HTMLElement = document.getElementById('sub_main_menu'.concat(index2.toString()).concat(index.toString())) as HTMLElement;
            clickelement.click();
            clickChildelement.click();
            clickChildelement.focus();
          }
        });
      })
    }
   })
}

}
