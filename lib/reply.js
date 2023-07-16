import firestore from '@react-native-firebase/firestore';

const userReply = firestore().collection('commentsReply');

export const writeReply = ({id, referenceId, reply, nickName, date}) => {
  return userReply.doc(id).set({
    id,
    referenceId,
    reply,
    nickName,
    date,
  });
};

export const getReply = (id, updateCallback) => {
  const unsubscribe = userReply
    .orderBy('date', 'asc')
    .onSnapshot(querySnapshot => {
      const data = querySnapshot.docs
        .map(doc => doc.data())
        .filter(doc => doc.referenceId === id);
      updateCallback(data);
    });
  return () => unsubscribe;
};
