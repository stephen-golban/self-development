export interface iDebounceFn {
  timeout: number;
  action: any;
  dispatch: any;
  dispatchFn: any;
  data: any;
  token: string;
}
