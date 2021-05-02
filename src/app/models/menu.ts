export interface IMenu{
  ModuleName: string;
  ModuleId: string;
  children: ISubMenu[];
}

export interface ISubMenu{
  CategoryCode: string;
  ModuleId: string;
  ModuleName: string;
  children1: IChildMenu[];

}

export interface IChildMenu{
  AddAccess:boolean;
  DeleteAccess:boolean;
  EditAccess:boolean;
  FormCategory:string;
  FormCode:null;
  FormDisplayName:null;
  IsCalendar: boolean;
IsChild: boolean;
IsFile: boolean;
IsForm: boolean;
IsHighChart: boolean;
IsKanbana: boolean;
IsReport: boolean;
IsSameKanbanaMasterDB: boolean;
IsSameMasterDB: boolean;
Keys: null;
MasterTable: string;
MasterTableKanbana: string;
ModuleId: string;
ModuleName:string;
ModuleURL: string;
ParentFormCode: string;
ParentMenu: string;
ReadAccess: boolean;
RoleManagementId: number;
key: string;
}
