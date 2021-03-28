import React from 'react';
import { Dimensions } from 'react-native';
import { SvgUri } from 'react-native-svg';
import PokeballSVG from '../../resources/svg/pokeball-icon.svg';
import PokemonCard, {IPokemonCardComponent} from './style';

export default (_props: IPokemonCardComponent) => {
  const {types} = _props;
  const windowWidth = Dimensions.get('window').width;
  const pokemonSize = windowWidth * 0.25;
  return (
    <PokemonCard types={types}>
      <PokemonCard.Name>{_props.name}</PokemonCard.Name>
      <PokemonCard.Tags>
        <PokemonCard.Tag>
          <PokemonCard.Tag.Text types={types}>
            {_props.types.primary}
          </PokemonCard.Tag.Text>
        </PokemonCard.Tag>
        {_props.types.secondary && (
          <PokemonCard.Tag>
            <PokemonCard.Tag.Text types={types}>
              {_props.types.secondary}
            </PokemonCard.Tag.Text>
          </PokemonCard.Tag>
        )}
      </PokemonCard.Tags>
      <PokemonCard.Portrait style={{ width: pokemonSize, height: pokemonSize }}>
        <PokeballSVG
          width="100%"
          height="100%"
          fill="white"
          style={{ position: 'absolute', opacity: 0.5 }}
        />
        <SvgUri
          width="80%"
          height="80%"
          uri={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${_props.id}.svg`}
        />
      </PokemonCard.Portrait>
    </PokemonCard>
  );
};
