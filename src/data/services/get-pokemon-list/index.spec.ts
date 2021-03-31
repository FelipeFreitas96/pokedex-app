import {HttpResponse, IApi} from '#/data/protocols/api';
import {GetPokemonListService} from '.';

const makeSut = () => {
  class AxiosAdapterStub implements IApi {
    async get(path: string): Promise<HttpResponse> {
      return Promise.resolve({
        data: {
          pokemon: [{
            pokemon: { name: "any_pokemon", url: "/pokemon/1/" },
            slot: 1,
          }]
        },
        status: {
          code: 200,
          message: 'any_message',
        },
      });
    }
  }

  const axiosAdapterStub = new AxiosAdapterStub();
  const sut = new GetPokemonListService(axiosAdapterStub);
  return {axiosAdapterStub, sut};
};

describe('Get Pokemon List', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should be ensure that pokemon data is correct', async () => {
    const {sut} = makeSut();
    const pokemonList = await sut.execute();
    expect(Object.keys(pokemonList).length).toBeGreaterThan(0);
  });
  it('should be ensure throws when cannot access the pokemon api', async () => {
    const {sut, axiosAdapterStub} = makeSut();
    jest.spyOn(axiosAdapterStub, 'get').mockImplementationOnce(async () => {
      return Promise.resolve({
        data: null,
        status: {
          code: 500,
          message: 'any_message'
        }
      });
    });
    expect(sut.execute()).rejects.toThrowError();
  });
  it('should be ensure throws when pokemon id is not of first generation', async () => {
    const {sut, axiosAdapterStub} = makeSut();
    jest.spyOn(axiosAdapterStub, 'get').mockImplementation(async () => {
      return Promise.resolve({
        data: {
          pokemon: [{
            pokemon: { name: "any_pokemon", url: "/pokemon/200/" },
            slot: 1,
          }]
        },
        status: {
          code: 200,
          message: 'any_message',
        },
      });
    });

    const pokemonList = await sut.execute();
    expect(Object.keys(pokemonList).length).toEqual(0);
  });
  it('should be ensure add secondary type when slot id equals 2', async () => {
    const {sut, axiosAdapterStub} = makeSut();
    jest.spyOn(axiosAdapterStub, 'get').mockImplementation(async () => {
      return Promise.resolve({
        data: {
          pokemon: [{
            pokemon: { name: "any_pokemon", url: "/pokemon/1/" },
            slot: 2,
          }]
        },
        status: {
          code: 200,
          message: 'any_message',
        },
      });
    });

    const pokemonList = await sut.execute();
    expect(Object.keys(pokemonList).length).toBeGreaterThan(0);
    expect(pokemonList[0].types.secondary).not.toBeNull();
  });
});
