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
  fire: {
    primary: '#fb6c6c',
    secondary: '#f88c8c',
  },
  grass: {
    primary: '#48d0b0',
    secondary: '#61e1c9',
  },
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
  background-color: ${(props: IPokemonCardComponent) =>
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
  background-color: ${(props: IPokemonCardComponent) =>
    PokemonCardTypes[props.types.primary.toLowerCase()].secondary};
  padding: 5px 15px;
  border-radius: 100px;
  color: white;
  font-size: ${normalize(11)};
`;
export default PokemonCard;
