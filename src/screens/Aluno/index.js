import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import {useTheme, Image, ButtonGroup, Input, Icon} from '@rneui/themed';
import Loading from '../../components/Loading';
import MyButtom from '../../components/MyButtom';
import DeleteButtom from '../../components/OutlineButton';
import {AlunoContext} from '../../context/AlunoProvider';
import {ToastAndroid} from 'react-native';

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 5px;
  padding-top: 20px;
`;

const Scroll = styled.ScrollView``;

export default function ({navigation, route}) {
  const {theme} = useTheme();
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [uid, setUid] = useState('');
  const [loading, setLoading] = useState(false);
  const [urlFoto, setUrlFoto] = useState('');
  const [urlDevice, setUrlDevice] = useState('');
  const {save} = useContext(AlunoContext);

  // console.log(route);
  // console.log(route.params.value.nome);

  useEffect(() => {
    if (route.params.value) {
      setNome(route.params.value.nome);
      setCurso(route.params.value.curso);
      setUid(route.params.value.uid);
    }
  }, [route]);

  function buscarImagemNoDevice() {
    alert('foi');
  }

  async function salvar() {
    setLoading(true);
    console.log(uid);
    if (
      await save({
        uid,
        nome,
        curso,
      })
    ) {
      ToastAndroid.show('Show! Você salvou.', ToastAndroid.LONG);
      navigation.goBack();
    } else {
      ToastAndroid.show('Ops!Deu problema ao salvar.', ToastAndroid.LONG);
    }

    setLoading(false);
  }

  function excluir() {
    alert('foi');
  }

  return (
    <Scroll>
      <Container>
        <Image
          source={
            urlDevice !== ''
              ? {uri: urlDevice}
              : urlFoto !== ''
              ? {uri: urlFoto}
              : {
                  uri: 'https://firebasestorage.googleapis.com/v0/b/pdm-aulas-797c8.appspot.com/o/images%2Fperson.png?alt=media&token=2be8523f-4c17-4a09-afbb-301a95a5ddfb&_gl=1*18jiiyk*_ga*MjA2NDY5NjU3NS4xNjg4MTI5NjYw*_ga_CW55HF8NVT*MTY5NjAyMzQxOS4zMS4xLjE2OTYwMjU4NzQuMzMuMC4w',
                }
          }
          PlaceholderContent={<Loading />}
        />
        <ButtonGroup
          buttons={['Buscar na Galeria', 'Tira Foto']}
          onPress={v => buscarImagemNoDevice(v)}
          containerStyle={{
            borderColor:
              theme.mode === 'light'
                ? theme.colors.primary
                : theme.colors.black,
            backgroundColor: theme.colors.white,
          }}
          textStyle={{
            color:
              theme.mode === 'light'
                ? theme.colors.primary
                : theme.colors.black,
          }}
        />
        <Input
          placeholder="Nome"
          keyboardType="default"
          returnKeyType="go"
          leftIcon={
            <Icon
              type="ionicon"
              name="person-outline"
              size={22}
              color={theme.colors.grey2}
            />
          }
          onChangeText={t => setNome(t)}
          value={nome}
        />
        <Input
          placeholder="Curso"
          keyboardType="default"
          returnKeyType="go"
          leftIcon={
            <Icon
              type="ionicon"
              name="rocket-outline"
              size={22}
              color={theme.colors.grey2}
            />
          }
          onChangeText={t => setCurso(t)}
          value={curso}
        />
        <MyButtom
          text="Salvar"
          onClick={() => {
            salvar();
          }}
        />
        {uid && (
          <DeleteButtom
            texto="Excluir"
            onClick={() => {
              excluir();
            }}
          />
        )}
        <Loading visivel={loading} />
      </Container>
    </Scroll>
  );
}
