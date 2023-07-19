import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

export const register = async ({email, password}) => {
  try {
    await AsyncStorage.setItem('session', JSON.stringify(email));
  } catch (e) {
    console.log(e);
  }

  return auth().createUserWithEmailAndPassword(email, password);
};

export const login = async ({email, password}) => {
  try {
    await AsyncStorage.setItem('session', JSON.stringify(email));
  } catch (e) {
    console.log(e);
  }

  return auth().signInWithEmailAndPassword(email, password);
};

export const subscribeAuth = callback => {
  return auth().subscribeAuth(callback);
};

export const logOut = async () => {
  try {
    await AsyncStorage.removeItem('session');
  } catch (e) {
    console.log(e);
  }

  return auth().signOut();
};

export const currentUserInfo = () => {
  return auth().currentUser;
};
