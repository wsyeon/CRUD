import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  Platform,
} from 'react-native';

const LoginScreen = () => {
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
            />
          </View>
          <View style={styles.loginInput}>
            <Text>비밀번호</Text>
            <TextInput
              style={styles.inputBorder}
              secureTextEntry
              placeholder="비밀번호 입력"
            />
          </View>
        </View>
        <Pressable
          style={({pressed}) => [
            styles.loginBtnWrapper,
            Platform.OS === 'ios' &&
              pressed && {
                backgroundColor: '#e8e8e8',
              },
          ]}>
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
