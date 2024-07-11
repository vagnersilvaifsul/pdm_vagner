import React, {useContext} from 'react';
import {View} from 'react-native';
import {AlunoContext} from '../../context/AlunoProvider';

export default function () {
  const {alunos} = useContext(AlunoContext);
  //aqui eu vou exibir os dados
  console.log(alunos);
  return <View />;
}
