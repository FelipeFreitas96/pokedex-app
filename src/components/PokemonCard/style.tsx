import {View, Text} from 'react-native';
import styled, {StyledComponentBase} from 'styled-components';
import normalize from '../../helper/normalize';

export type IPokemonType = {
  primary: string;
  secondary: string;
};

export interface IPokemonCardComponent {
  name: string;
  types: Partial<IPokemonType>;
}

export const PokemonCardTypes: {
  [type: string]: IPokemonType;
} = {
  bug: {
    primary: "#a8b820",
    secondary: '#ccdd39',
  },
  dragon: {
    primary: "#7038f8",
    secondary: '#8b5dfc',
  },
  electric: {
    primary: "#f8d030",
    secondary: '#fcdb58',
  },
  fighting: {
    primary: '#c03028',
    secondary: '#ea5149',
  },
  fire: {
    primary: '#f08030',
    secondary: '#fc9b55',
  },
  flying: {
    primary: '#a890f0',
    secondary: '#c5b3fc',
  },
  ghost: {
    primary: '#705898',
    secondary: '#9f86c9',
  },
  grass: {
    primary: '#78c850',
    secondary: '#9fec78',
  },
  ground: {
    primary: '#e0c068',
    secondary: '#e6ce8d',
  },
  ice: {
    primary: '#98d8d8',
    secondary: '#afecec',
  },
  normal: {
    primary: '#a8a878',
    secondary: '#c7c79b',
  },
  poison: {
    primary: '#a040a0',
    secondary: '#c15cc1',
  },
  psychic: {
    primary: '#f85888',
    secondary: '#ff85aa',
  },
  rock: {
    primary: '#b8a038',
    secondary: '#dbc358',
  },
  water: {
    primary: '#6890f0',
    secondary: '#8cadfc',
  }
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
  flex: 1 1 50%;
  max-width: 49%;
  background-color: ${(props: {types: Partial<IPokemonType>}) =>
    PokemonCardTypes[props.types.primary.toLowerCase()].primary};
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
  background-color: ${(props: {types: Partial<IPokemonType>}) =>
    PokemonCardTypes[props.types.primary.toLowerCase()].secondary};
  padding: 5px 15px;
  border-radius: 100px;
  color: white;
  font-size: ${normalize(11)};
`;
export default PokemonCard;
