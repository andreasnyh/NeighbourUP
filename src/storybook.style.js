import Colors from 'variables';
import styled from 'styled-components';

const Storybook = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding-bottom: 3rem;
  width: 100%;
  background-color: ${(props) =>
    props.darkmode ? Colors.DarkBlue : Colors.Beige};
  color: ${(props) => (props.darkmode ? Colors.White : Colors.Black)};
`;

export default Storybook;
