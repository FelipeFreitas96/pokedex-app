export interface HttpResponse {
  status: {code: number; message: string};
  data: any;
}

export interface IApi {
  get(path: string): Promise<HttpResponse>;
}
