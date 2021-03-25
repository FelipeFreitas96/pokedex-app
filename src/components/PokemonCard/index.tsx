import React from 'react';
import PokemonCard, {PokemonCardTypes, IPokemonCardComponent} from './style';

export default (_props: IPokemonCardComponent) => {
  return (
    <PokemonCard {..._props}>
      <PokemonCard.Name>{_props.name}</PokemonCard.Name>
      <PokemonCard.Tags>
        <PokemonCard.Tag>
          <PokemonCard.Tag.Text {..._props}>
            {_props.types.primary}
          </PokemonCard.Tag.Text>
        </PokemonCard.Tag>
        {_props.types.secondary && (
          <PokemonCard.Tag>
            <PokemonCard.Tag.Text {..._props}>
              {_props.types.secondary}
            </PokemonCard.Tag.Text>
          </PokemonCard.Tag>
        )}
      </PokemonCard.Tags>
    </PokemonCard>
  );
};
