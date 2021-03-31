import React from 'react';
import { View } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import SvgUriCached from '../SvgUriCached';

export default (props: any) => {
  const pokemonId: number = props.pokemonId;
  const style = props?.style || {};

  return (
    <View style={{ width: "80%", height: "80%", ...style }}>
      <SharedElement id={pokemonId.toString()}>
        <SvgUriCached
          width="100%"
          height="100%"
          uri={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
        />
      </SharedElement>
    </View>
  );
};
