import React from 'react';
import { PokemonInfoPage } from '#/pages';
import { NavigationProp } from '#/main/protocols/routes';

export const makePokemonInfoPage = (props: NavigationProp<'PokemonInfo'>) => (
  <PokemonInfoPage {...props} />
);