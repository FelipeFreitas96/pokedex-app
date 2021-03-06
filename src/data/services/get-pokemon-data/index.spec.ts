import {HttpResponse, IApi} from '#/data/protocols/api';
import {GetPokemonDataService} from '.';

const makeSut = () => {
  class AxiosAdapterStub implements IApi {
    async get(path: string): Promise<HttpResponse> {
      return Promise.resolve({
        data: {
          name: 'any_pokemon',
          types: [
            {type:{name: 'any_primary_type'}},
            {type:{secondary: 'any_secondary_type'}},
          ],
        },
        status: {
          code: 200,
          message: 'any_message',
        },
      });
    }
  }

  const axiosAdapterStub = new AxiosAdapterStub();
  const sut = new GetPokemonDataService(axiosAdapterStub);
  return {axiosAdapterStub, sut};
};

describe('Get Pokemon Data', () => {
  it('should be return successful when a pokemon exists', async () => {
    const {sut} = makeSut();
    const response = await sut.execute(1);
    expect(response.name).toBe('any_pokemon');
  });
  it('should be return throws when a pokemon not exists', async () => {
    const {sut, axiosAdapterStub} = makeSut();
    jest.spyOn(axiosAdapterStub, 'get').mockImplementationOnce(async () => {
      return Promise.resolve({
        data: null,
        status: {
          code: 400,
          message: 'any_error',
        }
      });
    });
    expect(sut.execute(-1)).rejects.toThrow();
  });
});
