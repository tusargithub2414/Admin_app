import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpluseService {
  private canSubCategory = 'https://www.empulseudp.com/UDPAPI/api/CanSubCategory/GetCanSubCategory';
  private defaultLeftMenu = 'https://www.empulseudp.com/UDPAPI/api/RoleManagement/DefaultLeftMenu';
  private leftMenuCategoryUri = "https://www.empulseudp.com/UDPAPI/api/RoleManagement/GetLeftMenuCategory";
  constructor(private http: HttpClient) { }

  public getCanSubCategory(): Observable<any> {
    const data = {
      CategoryCode: null,
      TenantId: 0,
      LanguageId: 1
    }
    return this.http.post(this.canSubCategory, data);
  }

  public getDefaultLeftMenu(data: any): Observable<any> {
    return this.http.post(this.defaultLeftMenu, data);
  }

  public getLeftMenuCategories(): Observable<any> {
    const inputData = {
      RoleId:7,
      TenantId:1,
      LanguageID:1
    }
    return this.http.post(this.leftMenuCategoryUri, inputData);
  }
}
