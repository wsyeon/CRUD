import firestore from '@react-native-firebase/firestore';

export const userWriter = firestore().collection('userWriter');

export const userWrite = async ({id, email, title, body, date, nickName}) => {
  return await userWriter.doc(id).set({
    id,
    email,
    title,
    body,
    date,
    nickName,
  });
};

// chatGpt로 해서 해결을 했으나 잘 모르겠음
export const getWrite = updateCallback => {
  const unsubscribe = userWriter
    .orderBy('date', 'desc')
    .onSnapshot(querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data());
      updateCallback(data);
    });

  return () => {
    unsubscribe;
  };
};

export const deleteWrite = async id => {
  return await userWriter.doc(id).delete();
};

export const modifyWrite = async ({title, body, id}) => {
  return await userWriter.doc(id).update({
    title,
    body,
  });
};
