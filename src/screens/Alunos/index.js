import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {AlunoContext} from '../../context/AlunoProvider';
import Item from './Item';
import FloatButtonAdd from '../../components/FloatButtonAdd';

const Container = styled.SafeAreaView`
  flex: 1;
  padding: 5px;
`;

const FlatList = styled.FlatList`
  width: 100%;
  height: 100%;
`;

export default function ({navigation}) {
  const {alunos} = useContext(AlunoContext);
  //aqui eu vou exibir os dados
  //console.log(alunos);
  // const [alunosTemp, setAlunosTemp] = useState([
  //   {uid: '1', nome: 'Ana', curso: 'CSTSI'},
  //   {uid: '2', nome: 'Rafael', curso: 'CSBD'},
  // ]);

  const routeStudent = value => {
    navigation.navigate('Aluno', {
      value,
    });
  };
  return (
    <Container>
      {/* {alunos.map((v, k) => (
        <Item item={v} onPress={() => alert('foi')} key={k} />
      ))} */}
      <FlatList
        data={alunos}
        renderItem={({item}) => (
          <Item item={item} onPress={() => routeStudent(item)} key={item.uid} />
        )}
        keyExtractor={item => item.uid}
      />
      <FloatButtonAdd onClick={() => routeStudent(null)} />
    </Container>
  );
}
