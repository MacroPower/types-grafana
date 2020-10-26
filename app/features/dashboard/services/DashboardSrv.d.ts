export declare class DashboardSrv {
  dashboard: any;
  constructor($rootScope: any);
  create(dashboard: any, meta: any): any;
  setCurrent(dashboard: any): void;
  getCurrent(): any;
}
export function setDashboardSrv(instance: any);
export function getDashboardSrv(): any;
