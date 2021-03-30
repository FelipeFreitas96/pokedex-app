import {View, Text, TouchableOpacity} from 'react-native';
import styled, {StyledComponentBase} from 'styled-components';
import normalize from '../../helper/normalize';

export type PokemonTypeObject = {
  name: string;
  color: string;
}

export type PokemonType = {
  primary: PokemonTypeObject;
  secondary: PokemonTypeObject;
};

export interface IPokemonCardComponent {
  id: number;
  name: string;
  types: Partial<PokemonType>;
  onPress?: any;
}

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
  Portrait?: any;
}

const PokemonCard: IPokemonCardStyle = styled(TouchableOpacity)`
  flex: 1;
  background-color: ${(props: {types: Partial<PokemonType>}) =>
    props.types.primary.color};
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
PokemonCard.Portrait = styled(View)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  justify-content: center;
  align-content: center;
`;
export default PokemonCard;
