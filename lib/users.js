import firestore from '@react-native-firebase/firestore';

export const userCollection = firestore().collection('users');

export const usersInfo = ({
  id,
  email,
  password,
  grade,
  gradeInfo,
  nickName,
}) => {
  return userCollection.doc(email).set({
    email,
    id,
    password,
    grade,
    gradeInfo,
    nickName,
  });
};

export const getUser = async id => {
  const doc = await userCollection.doc(id).get();

  return doc.data();
};
