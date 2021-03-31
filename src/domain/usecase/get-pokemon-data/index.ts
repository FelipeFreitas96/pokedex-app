import { IPokemon } from '#/domain/entities/pokemon';
export interface IGetPokemonData {
  execute(id: number): Promise<IPokemon>;
}
