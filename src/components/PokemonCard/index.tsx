import React from 'react';
import { Dimensions } from 'react-native';
import PokeballSVG from '../../resources/svg/pokeball-icon.svg';
import PokemonPortrait from '../PokemonPortrait';
import PokemonCard, {IPokemonCardComponent} from './style';

export default (_props: IPokemonCardComponent) => {
  const {types} = _props;
  const windowWidth = Dimensions.get('window').width;
  const pokemonSize = windowWidth * 0.25;
  return (
    <PokemonCard types={types} onPress={_props?.onPress}>
      <PokemonCard.Name>{_props.name}</PokemonCard.Name>
      <PokemonCard.Tags>
        <PokemonCard.Tag>
          <PokemonCard.Tag.Text>
            {_props.types.primary.name}
          </PokemonCard.Tag.Text>
        </PokemonCard.Tag>
        {_props.types.secondary && (
          <PokemonCard.Tag>
            <PokemonCard.Tag.Text>
              {_props.types.secondary.name}
            </PokemonCard.Tag.Text>
          </PokemonCard.Tag>
        )}
      </PokemonCard.Tags>
      <PokemonCard.Portrait style={{ width: pokemonSize, height: pokemonSize, alignItems: 'center' }}>
        <PokeballSVG
          width="100%"
          height="100%"
          fill="white"
          style={{ position: 'absolute', opacity: 0.5 }}
        />
        <PokemonPortrait pokemonId={_props.id} />
      </PokemonCard.Portrait>
    </PokemonCard>
  );
};
