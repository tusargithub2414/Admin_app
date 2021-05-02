import { Router } from '@angular/router';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-grand-children',
  templateUrl: './grand-children.component.html',
  styleUrls: ['./grand-children.component.css']
})
export class GrandChildrenComponent implements OnInit {
   public title = '';
   public grandChildren:any = {};
  constructor(public sharedService: SharedService ) {
   }

  ngOnInit(): void {
    this.sharedService.currentGrandChildren.subscribe((res: any)=>{
      this.grandChildren = res;
      this.title = res ? res.ModuleName : 'No Child component';
    })
  }



}
