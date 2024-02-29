import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Button from './src/components/Button';

const App = () => {
  //State (uma variável que pode mudar o valor durante a execução do app)
  const [contador, setContador] = useState(0);
  //const[getContador, setContador] = useState(0);

  function incrementar() {
    setContador(contador + 1);
  }

  function decrementar() {
    setContador(contador - 1);
  }

  //Ciclo de vide dos componentes React

  //Chamado ao criar o componente
  useEffect(() => {
    console.log('Na contrução do componente.');

    //Chamado quando o componente é destruído
    return console.log('Ao destruir o componente.');
  }, []);

  //Chamado ao atualizar o componente
  useEffect(() => {
    console.log('Na atualização do componenente.');
  }, [contador]);

  return (
    <View>
      <Text>Contador: {contador}</Text>
      <Button aoClicar={incrementar} texto="Incrementar" />
      <Button aoClicar={decrementar} texto="Decrementar" />
    </View>
  );
};

export default App;
