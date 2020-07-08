import styled from 'styled-components';
import Theme from '../../lib/Theme';

export interface HomeProps {
  isBlue?: boolean;
}

export const HomeContainer = styled.div<HomeProps>`
  width: 100vw;
  height: 100vh;
  background-color: ${Theme.colours.backgroundColours.primary};
  color: ${(props) => (props.isBlue ? 'blue' : 'black')};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
`;
