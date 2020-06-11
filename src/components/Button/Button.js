import styled from 'styled-components';
import Colors from '../../variables';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.lightMode ? Colors.DarkBlue : Colors.Pink)};
  color: ${(props) => (props.LightMode ? Colors.Black : Colors.White)};
  font-size: 1em;
  margin: 1em;
  padding: 0.6em 2em;
  border: 0;
  border-radius: 8px;
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.2);
  &&:hover {
    background: ${Colors.White};
    color: ${Colors.Black};
  }
`;

export default Button;
