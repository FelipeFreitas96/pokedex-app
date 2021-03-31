import { ParamListBase } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { IPokemon } from '#/domain/entities/pokemon';

interface StackParamList extends ParamListBase {
  MainPage: undefined;
  PokemonInfoPage: IPokemon;
}

export type NavigationProp<T extends string> = StackScreenProps<StackParamList, T>;