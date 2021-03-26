import {HttpResponse, IApi} from '../protocols/api';
import {GetPokemonData} from './get-pokemon-data';

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
  const sut = new GetPokemonData(axiosAdapterStub);
  return {axiosAdapterStub, sut};
};

describe('Get Pokemon Data', () => {
  it('should be successful when pokemon exists', async () => {
    const {sut} = makeSut();
    const response = await sut.execute(1);
    expect(response.name).toBe('any_pokemon');
  });
});
