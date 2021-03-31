import {View} from 'react-native';
import styled, {StyledComponentBase} from 'styled-components';

export type PokemonTypeObject = {
  name: string;
  color: string;
}

export type PokemonType = {
  primary: PokemonTypeObject;
  secondary: PokemonTypeObject;
};

interface IPokemonInfoStyle extends StyledComponentBase<any, any, {}, never> {
  Body?: any;
  Header?: any;
}

const PokemonInfo: IPokemonInfoStyle = styled(View)`
  flex: 1;
  background-color: ${(props: {types: PokemonType}) =>
    props.types.primary.color};
`;

PokemonInfo.Header = styled(View)`
  flex: 0.9;
  align-content: center;
  justify-content: flex-end;
  align-items: center;
`;

PokemonInfo.Body = styled(View)`
  flex: 1.1;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export default PokemonInfo;
