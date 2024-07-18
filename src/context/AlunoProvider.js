import React, {createContext, useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

export const AlunoContext = createContext({});

export const AlunoProvider = ({children}) => {
  const [alunos, setAlunos] = useState([]);

  //Read
  useEffect(() => {
    const listner = firestore()
      .collection('alunos')
      .orderBy('nome')
      .onSnapshot(snapshot => {
        let data = [];
        snapshot.forEach(doc => {
          data.push({
            uid: doc.id,
            nome: doc.data().nome,
            curso: doc.data().curso,
          });
        });
        setAlunos(data);
      });

    return () => {
      listner();
    };
  }, []);

  const save = async (aluno, urlDevice) => {
    try {
      // if (urlDevice !== '') {
      //   estudante.urlFoto = await sendImageToStorage(urlDevice, estudante);
      //   if (!estudante.urlFoto) {
      //     return false; //não deixa salvar ou atualizar se não realizar todos os passpos para enviar a imagem para o storage
      //   }
      // }
      await firestore().collection('alunos').doc(aluno.uid).set(
        {
          nome: aluno.nome,
          curso: aluno.curso,
          //urlFoto: aluno.urlFoto,
        },
        {merge: true},
      );
      return true;
    } catch (e) {
      console.error('AlunoProvider, save: ' + e);
      return false;
    }
  };

  return (
    <AlunoContext.Provider value={{alunos, save}}>{children}</AlunoContext.Provider>
  );
};
