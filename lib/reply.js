import firestore from '@react-native-firebase/firestore';

const userReply = firestore().collection('commentsReply');

export const writeReply = ({id, referenceId, reply, nickName, date, email}) => {
  return userReply.doc(id).set({
    id,
    referenceId,
    reply,
    nickName,
    date,
    email,
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

export const deleteReply = async id => {
  return await userReply.doc(id).delete();
};
