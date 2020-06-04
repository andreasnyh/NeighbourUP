import styled from 'styled-components';
import Colors, { BoxShadow } from '../../variables';

const Input = styled.input`
  background-color: ${(props) =>
    props.darkmode ? Colors.DarkBlue : Colors.Beige};
  color: ${(props) => (props.darkmode ? Colors.White : Colors.Black)};
  border-radius: 17px;
  border: 0;
  padding: 14px;
  box-shadow: ${(props) =>
    props.darkmode ? BoxShadow.DarkMode : BoxShadow.Normal};
`;

export default Input;
