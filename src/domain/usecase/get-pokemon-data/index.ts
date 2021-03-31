import { IPokemon } from '#/domain/entities';
export interface IGetPokemonData {
  execute(id: number): Promise<IPokemon>;
}
