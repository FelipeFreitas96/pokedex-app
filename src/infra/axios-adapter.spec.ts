import {IApi} from '../data/protocols/api';
import {AxiosAdapter} from './axios-adapter';

describe('Test Axios Adapter', () => {
  let sut: IApi;
  it('should be status code 404 when page not found', async () => {
    sut = new AxiosAdapter();
    const response = await sut.get('/pokemon/any_error');
    expect(response.status.code).toBe(404);
  });
  it('should be status code 200 when is a valid pokemon', async () => {
    sut = new AxiosAdapter();
    const response = await sut.get('/pokemon/1');
    expect(response.status.code).toBe(200);
  });
});