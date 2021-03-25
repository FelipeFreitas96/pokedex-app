import {View, Text} from 'react-native';
import styled, {StyledComponentBase} from 'styled-components';
import normalize from '../../helper/normalize';

interface IPokemonCard extends StyledComponentBase<any, any, {}, never> {
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

const PokemonCard: IPokemonCard = styled(View)`
  flex: 1 1 50%;
  max-width: 49%;
  background-color: #48d0b0;
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
  background-color: #61e0c9;
  padding: 5px 15px;
  border-radius: 100px;
  color: white;
  font-size: ${normalize(11)};
`;
export default PokemonCard;
