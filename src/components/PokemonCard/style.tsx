import {View, Text} from 'react-native';
import styled, {StyledComponentBase} from 'styled-components';
import normalize from '../../helper/normalize';

export type IPokemonType = {
  primary: string;
  secondary: string;
};

export interface IPokemonCardComponent {
  id: number;
  name: string;
  types: Partial<IPokemonType>;
}

export const PokemonCardTypes: {
  [type: string]: string;
} = {
  bug: '#a8b820',
  dragon: '#7038f8',
  electric: '#f8d030',
  fighting: '#c03028',
  fire: '#f08030',
  flying: '#a890f0',
  ghost: '#705898',
  grass: '#78c850',
  ground: '#e0c068',
  ice: '#98d8d8',
  normal: '#a8a878',
  poison: '#a040a0',
  psychic: '#f85888',
  rock: '#b8a038',
  water: '#6890f0',
};

interface IPokemonCardStyle extends StyledComponentBase<any, any, {}, never> {
  Container?: any;
  Name?: any;
  Tags?: any;
  Tag?:
    | any
    | {
        Text?:
          | any
          | {
              Primary?: any;
              Secondary?: any;
            };
      };
}

const PokemonCard: IPokemonCardStyle = styled(View)`
  position: relative;
  flex: 1 1 50%;
  max-width: 49%;
  background-color: ${(props: {types: Partial<IPokemonType>}) =>
    PokemonCardTypes[props.types.primary.toLowerCase()]};
  padding: 10px;
  height: 140px;
  margin: 0.5%;
`;
PokemonCard.Name = styled(Text)`
  color: white;
  font-weight: bold;
  font-size: ${normalize(15)};
  font-family: Tahoma;
`;
PokemonCard.Tags = styled(View)`
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 10px;
`;
PokemonCard.Tag = styled(View)`
  padding-bottom: 10px;
  flex-direction: row;
`;
PokemonCard.Tag.Text = styled(Text)`
  background-color: #ffffff4d;
  padding: 5px 15px;
  border-radius: 100px;
  color: white;
  font-size: ${normalize(11)};
`;
export default PokemonCard;
