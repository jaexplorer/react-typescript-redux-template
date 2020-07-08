import React, { FC } from 'react';
import { HomeContainer } from './HomeStyles';
import useStrings from '../../lib/Strings';

const Home: FC<HomeProps> = () => {
  const [strings] = useStrings();

  return <HomeContainer>{strings.HomeScreen.title}</HomeContainer>;
};

export interface HomeProps {}

export default Home;
