import auth from '@react-native-firebase/auth';

export const register = ({email, password}) => {
  return auth().createUserWithEmailAndPassword(email, password);
};

export const login = ({email, password}) => {
  return auth().signInWithEmailAndPassword(email, password);
};

export const subscribeAuth = callback => {
  return auth().subscribeAuth(callback);
};

export const logOut = () => {
  return auth().signOut();
};

export const currentUserInfo = () => {
  return auth().currentUser;
};
