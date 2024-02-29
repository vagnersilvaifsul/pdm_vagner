import React, {useState} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

// import { Container } from './styles';

const App = () => {
  //State (uma variável que pode mudar o valor durante a execução do app)
  const [contador, setContador] = useState(0);
  //const[getContador, setContador] = useState(0);

  console.log(contador);

  return (
    <View>
      <Text>Contador: {contador}</Text>
      <TouchableHighlight onPress={() => setContador(contador + 1)}>
        <Text>Incrementar</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => setContador(contador - 1)}>
        <Text>Decrementar</Text>
      </TouchableHighlight>
    </View>
  );
};

export default App;
