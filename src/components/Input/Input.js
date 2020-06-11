import styled from 'styled-components';
import Colors, { BoxShadow } from '../../variables';

const Input = styled.input`
  width: 60%;
  background-color: ${(props) =>
    props.darkmode ? Colors.DarkBlue : Colors.Beige};
  color: ${(props) => (props.darkmode ? Colors.White : Colors.Black)};
  border-radius: 17px;
  border: 0;
  margin: 10px 0;
  padding: 14px;
  box-shadow: ${(props) =>
    props.darkmode ? BoxShadow.DarkMode : BoxShadow.Normal};
  ::placeholder {
    color: ${(props) => (props.darkmode ? Colors.White : Colors.Black)};
`;

export default Input;
