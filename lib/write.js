import firestore from '@react-native-firebase/firestore';

export const userWriter = firestore().collection('userWriter');

export const userWrite = ({id, email, title, body, date}) => {
  return userWriter.doc(id).set({
    id,
    email,
    title,
    body,
    date,
  });
};

// chatGpt로 해서 해결을 했으나 잘 모르겠음
export const getWrite = async updateCallback => {
  const unsubscribe = userWriter
    .orderBy('date', 'desc')
    .onSnapshot(querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data());
      updateCallback(data);
    });
  return unsubscribe;
};
