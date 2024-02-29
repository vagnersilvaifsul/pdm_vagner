import React from 'react';
import {TouchableHighlight, Text} from 'react-native';

// import { Container } from './styles';

const Button = ({aoClicar, texto}) => {
  return (
    <TouchableHighlight onPress={aoClicar}>
      <Text>{texto}</Text>
    </TouchableHighlight>
  );
};

export default Button;
