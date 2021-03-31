import { IPokemon } from "#/domain/entities";

export type PokedexPageProps = {
  pokemonList: IPokemon[];
  navigation: { push: (screen: string, pokemon: IPokemon) => void };
};

export type PokemonInfoProps = {
  route: { params: IPokemon };
  navigation: { push: (screen: string, pokemon: IPokemon) => void };
};