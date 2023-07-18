import firestore from '@react-native-firebase/firestore';

export const userComments = firestore().collection('userComments');

export const writeComment = ({
  id,
  referenceId,
  comment,
  nickName,
  date,
  email,
}) => {
  return userComments.doc(id).set({
    id,
    referenceId,
    comment,
    nickName,
    date,
    email,
  });
};

export const getWriteComments = (id, updateCallback) => {
  const unsubscribe = userComments
    .orderBy('date', 'asc')
    .onSnapshot(querySnapshot => {
      const data = querySnapshot.docs
        .map(doc => doc.data())
        .filter(doc => doc.referenceId === id);
      updateCallback(data);
    });

  return () => unsubscribe;
};

export const deleteComments = async id => {
  return await userComments.doc(id).delete();
};
