import React, {createContext, useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

export const AlunoContext = createContext({});

export const AlunoProvider = ({children}) => {
  const [alunos, setAlunos] = useState([]);

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

  return (
    <AlunoContext.Provider value={{alunos}}>{children}</AlunoContext.Provider>
  );
};
