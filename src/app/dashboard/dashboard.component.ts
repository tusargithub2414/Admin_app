import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpluseService } from '../api/empluse.service'
import { SharedService } from '../shared.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
public subCatgorylist = [];
  constructor(public empluseService : EmpluseService, private sharedService: SharedService, private router:Router) { }

  ngOnInit(): void {
    this.getData();
  }
  public getData(){
    this.empluseService.getCanSubCategory().subscribe(
      (res)=>{
        this.subCatgorylist = res;
        console.log('-----', res )
      }

    )
  }
  getDataForGrandChildren(element: any){
    const data = {
      RoleId: 7,
      TenantId: 1,
      ParentMenu: element.SubCode
    }
    this.empluseService.getDefaultLeftMenu(data).subscribe(
      (result)=>{

        this.sharedService.changeCurrentGrand(result[0]);
        this.router.navigate(['../grandchildren']);
      }
    )
  }
}
