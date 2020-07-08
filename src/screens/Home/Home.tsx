import React, { FC } from 'react';
import { HomeContainer } from './HomeStyles';

const Home: FC<HomeProps> = () => {
  return <HomeContainer>Hello World</HomeContainer>;
};

export interface HomeProps {}

export default Home;
