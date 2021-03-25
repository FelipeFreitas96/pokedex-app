import axios, {AxiosInstance} from 'axios';
import {HttpResponse, IApi} from '../data/protocols/api';

export class AxiosAdapter implements IApi {
  private instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://pokeapi.co/api/v2/',
    });
  }
  async get(path: string): Promise<HttpResponse> {
    try {
      const response = await this.instance.get(path);
      return {
        data: response.data,
        status: {
          code: response.status,
          message: response.statusText,
        },
      };
    } catch (err) {
      return {
        data: null,
        status: {
          code: err.response.status,
          message: err,
        },
      };
    }
  }
}
