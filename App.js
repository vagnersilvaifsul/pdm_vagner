import React, {useState} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

const Button = ({aoClicar, texto}) => {
  console.log(aoClicar);
  console.log(texto);
  return (
    <TouchableHighlight onPress={aoClicar}>
      <Text>{texto}</Text>
    </TouchableHighlight>
  );
};

const App = () => {
  //State (uma variável que pode mudar o valor durante a execução do app)
  const [contador, setContador] = useState(0);
  //const[getContador, setContador] = useState(0);

  console.log(contador);

  function incrementar() {
    setContador(contador + 1);
  }

  function decrementar() {
    setContador(contador - 1);
  }

  return (
    <View>
      <Text>Contador: {contador}</Text>
      <Button aoClicar={incrementar} texto="Incrementar" />
      <Button aoClicar={decrementar} texto="Decrementar" />
    </View>
  );
};

export default App;
