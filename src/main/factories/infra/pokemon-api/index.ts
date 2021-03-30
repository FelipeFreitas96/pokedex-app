import { AxiosAdapter } from '#/infra/axios-adapter';
export const makePokemonApi = () => new AxiosAdapter();