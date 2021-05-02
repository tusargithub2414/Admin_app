import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

 private messageSource = new BehaviorSubject({ModuleName: 'No data found'});
 currentGrandChildren = this.messageSource.asObservable();

  constructor() { }

  changeCurrentGrand(data: any){
    this.messageSource.next(data);
  }

}
