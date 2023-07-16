import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  Platform,
} from 'react-native';
import {login} from '../lib/auth';
import {useNavigation} from '@react-navigation/native';
import {getUser} from '../lib/users';

const LoginScreen = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const navigation = useNavigation();
  const [error, setError] = useState(null);

  const onChangeInput = (key, value) => {
    setForm({...form, [key]: value});
  };

  const onLogin = async () => {
    const {email, password} = form;
    const info = {email, password};

    try {
      const {user} = await login(info);
      const userInfo = await getUser(user.email);
      const {grade, gradeInfo, nickName} = userInfo;

      navigation.navigate('MainTab', {
        screen: 'Home',
        params: {
          grade,
          gradeInfo,
          nickName,
        },
      });
    } catch (e) {
      console.log(e);
      switch (e.code) {
        case 'auth/invalid-email':
          setError('이메일을 입력해주세요');
          break;
        case 'auth/missing-password':
          setError('비밀번호를 입력해주세요');
          break;
        case 'auth/user-not-found':
          setError('존재하지 않는 계정입니다.');
          break;
        case 'auth/wrong-password':
          setError('비빌번호가 틀립니다');
          break;
      }
    }
  };

  return (
    <View style={styles.block}>
      <View style={styles.loginWrapper}>
        <View style={styles.loginInputWrapper}>
          <View style={styles.loginInput}>
            <Text>아이디</Text>
            <TextInput
              style={styles.inputBorder}
              returnKeyType="next"
              placeholder="이메일을 입력해주세요."
              keyboardType="email-address"
              value={form.email}
              onChangeText={text => onChangeInput('email', text)}
            />
          </View>
          <View style={styles.loginInput}>
            <Text>비밀번호</Text>
            <TextInput
              style={styles.inputBorder}
              secureTextEntry
              placeholder="비밀번호 입력"
              value={form.password}
              onChangeText={text => onChangeInput('password', text)}
            />
          </View>
          <View style={styles.error}>
            {error && <Text style={styles.errorMessage}>{error}</Text>}
          </View>
        </View>
        <Pressable
          style={({pressed}) => [
            styles.loginBtnWrapper,
            Platform.OS === 'ios' &&
              pressed && {
                backgroundColor: '#e8e8e8',
              },
          ]}
          onPress={onLogin}>
          <Text style={styles.loginBtnFont}>로그인</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  loginWrapper: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  loginInputWrapper: {
    width: '95%',
    height: 300,
    justifyContent: 'space-evenly',
  },
  loginInput: {
    height: 100,
    justifyContent: 'space-evenly',
  },
  inputBorder: {
    borderBottomWidth: 1,
    paddingBottom: 3,
  },
  error: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    fontSize: 16,
    color: '#ff0000',
  },
  loginBtnWrapper: {
    width: '85%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#e3e3e3',
    backgroundColor: '#e3e3e3',
  },
  loginBtnFont: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
