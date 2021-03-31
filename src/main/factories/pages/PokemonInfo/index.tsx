import React from 'react';
import { PokemonInfoPage } from '#/pages';
import { PokemonInfoProps } from '#/domain/entities';

export const makePokemonInfoPage = (props: PokemonInfoProps) => (
  <PokemonInfoPage {...props} />
);