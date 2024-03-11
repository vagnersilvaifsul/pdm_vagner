import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../components/Button';

export default function Home({navigation}) {
  //State (uma variável que pode mudar o valor durante a execução do app)
  const [contador, setContador] = useState(0);
  //const[getContador, setContador] = useState(0);

  console.log(navigation);

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
      <Text style={styles.texto}>Contador: {contador}</Text>
      <Button aoClicar={incrementar} texto="Incrementar" />
      <Button aoClicar={decrementar} texto="Decrementar" />
      <Button
        aoClicar={() => navigation.navigate('SignIn')}
        texto="Ir para SignIn"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    size: 24,
    fontWeight: 'bold',
    color: '#f00',
  },
});
