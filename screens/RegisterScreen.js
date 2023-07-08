import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  Platform,
} from 'react-native';
import Picker from 'react-native-picker-select';

const LoginScreen = () => {
  const [grade, setGrade] = useState('');
  const [gradeInfo, setGradeInfo] = useState('');

  return (
    <View style={styles.block}>
      <View style={styles.registerWrapper}>
        <View style={styles.registerInputWrapper}>
          <View style={styles.registerInput}>
            <Text>아이디</Text>
            <TextInput
              style={styles.inputBorder}
              returnKeyType="next"
              placeholder="이메일을 입력해주세요."
              keyboardType="email-address"
            />
          </View>
          <View style={styles.registerInput}>
            <Text>비밀번호</Text>
            <TextInput
              style={styles.inputBorder}
              secureTextEntry
              placeholder="비밀번호 입력"
            />
          </View>
          <View style={styles.registerInput}>
            <Text>비밀번호 확인</Text>
            <TextInput
              style={styles.inputBorder}
              secureTextEntry
              placeholder="비밀번호 입력"
            />
          </View>
          <View style={styles.info}>
            <Picker
              onValueChange={value => setGrade(value)}
              items={[
                {label: '1', value: '1'},
                {label: '2', value: '3'},
                {label: '3', value: '2'},
              ]}
            />
            <Text>학년</Text>
            <Picker
              onValueChange={value => setGradeInfo(value)}
              items={[
                {label: '네트워크보안', value: '네트워크보안'},
                {label: '게임과', value: '게임과'},
                {label: '해킹보안', value: '해킹보안'},
                {label: '클라우드보안', value: '클라우드보안'},
                {label: '메타버스게임', value: '메타버스게임'},
              ]}
            />
            <Text>과</Text>
          </View>
        </View>
        <Pressable
          style={({pressed}) => [
            styles.registerBtnWrapper,
            Platform.OS === 'ios' &&
              pressed && {
                backgroundColor: '#e8e8e8',
              },
          ]}>
          <Text style={styles.registerBtnFont}>회원가입</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  registerWrapper: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  registerInputWrapper: {
    width: '95%',
    height: 300,
    justifyContent: 'space-evenly',
  },
  registerInput: {
    height: 100,
    justifyContent: 'space-evenly',
  },
  inputBorder: {
    borderBottomWidth: 1,
    paddingBottom: 3,
  },
  info: {
    flexDirection: 'row',
  },
  registerBtnWrapper: {
    width: '85%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#e3e3e3',
    backgroundColor: '#e3e3e3',
  },
  registerBtnFont: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
