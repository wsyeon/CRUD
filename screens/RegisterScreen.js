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
import {currentUserInfo, register} from '../lib/auth';
import {useNavigation} from '@react-navigation/native';
import {usersInfo} from '../lib/users';
import {v4 as uuidv4} from 'uuid';

const RegisterScreen = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    checkPassword: '',
    grade: '',
    gradeInfo: '',
    nickName: '',
  });
  const [error, setError] = useState(null);
  const user = currentUserInfo();

  const navigation = useNavigation();

  const onInputText = (key, value) => {
    setForm({...form, [key]: value});
  };

  const onRegister = async () => {
    const {email, password, checkPassword, grade, gradeInfo, nickName} = form;
    const info = {email, password, grade, gradeInfo, nickName};

    if (password !== checkPassword) {
      setError('비밀번호가 맞지 않습니다.');
      return;
    }

    if (grade === null || gradeInfo === null) {
      return;
    }

    try {
      await usersInfo({
        id: uuidv4(),
        email,
        password,
        grade,
        gradeInfo,
        nickName,
      });
      await register(info);
      user.updateProfile({
        displayName: nickName,
      });
      setError(null);
    } catch (e) {
      switch (e.code) {
        case 'auth/missing-email':
          setError('이메일을 입력해주세요');
          break;
        case 'auth/missing-password':
          setError('비밀번호를 입력해주세요');
          break;
        case 'auth/invalid-email':
          setError('잘못된 이메일 주소입니다');
          break;
        case 'auth/weak-password':
          setError('비밀번호는 6자리 이상이어야 합니다');
          break;
        case 'auth/email-already-in-use':
          setError('이미 가입되어 있는 계정입니다');
          break;
      }
    }
    navigation.navigate('MainTab', {
      screen: 'Home',
      params: {
        grade,
        gradeInfo,
        nickName,
      },
    });
  };

  return (
    <View style={styles.block}>
      <View style={styles.registerWrapper}>
        <View style={styles.registerInputWrapper}>
          <View style={styles.registerInput}>
            <Text>닉네임</Text>
            <TextInput
              style={styles.inputBorder}
              returnKeyType="next"
              placeholder="별명을 적어주세요."
              keyboardType="email-address"
              value={form.nickName}
              onChangeText={text => onInputText('nickName', text)}
            />
          </View>
          <View style={styles.registerInput}>
            <Text>아이디</Text>
            <TextInput
              style={styles.inputBorder}
              returnKeyType="next"
              placeholder="이메일을 입력해주세요."
              keyboardType="email-address"
              value={form.email}
              onChangeText={text => onInputText('email', text)}
            />
          </View>
          <View style={styles.registerInput}>
            <Text>비밀번호</Text>
            <TextInput
              style={styles.inputBorder}
              secureTextEntry
              placeholder="비밀번호 입력"
              value={form.password}
              onChangeText={text => onInputText('password', text)}
            />
          </View>
          <View style={styles.registerInput}>
            <Text>비밀번호 확인</Text>
            <TextInput
              style={styles.inputBorder}
              secureTextEntry
              placeholder="비밀번호 입력"
              value={form.checkPassword}
              onChangeText={text => onInputText('checkPassword', text)}
            />
          </View>
          <View style={styles.info}>
            <Picker
              onValueChange={value => onInputText('grade', value)}
              items={[
                {label: '1', value: '1'},
                {label: '2', value: '2'},
                {label: '3', value: '3'},
              ]}
              placeholder={{label: '학년 선택', value: null}}
            />
            <Text>학년 </Text>
            <Picker
              onValueChange={value => onInputText('gradeInfo', value)}
              items={[
                {label: '네트워크보안', value: '네트워크보안과'},
                {label: '게임', value: '게임과'},
                {label: '해킹보안', value: '해킹보안과'},
                {label: '클라우드보안', value: '클라우드보안과'},
                {label: '메타버스게임', value: '메타버스게임과'},
              ]}
              placeholder={{label: '학과 선택', value: null}}
            />
            <Text>과</Text>
          </View>
        </View>
        <View style={styles.error}>
          {error && <Text style={styles.errorMessage}>{error}</Text>}
        </View>
        <Pressable
          style={({pressed}) => [
            styles.registerBtnWrapper,
            Platform.OS === 'ios' &&
              pressed && {
                backgroundColor: '#e8e8e8',
              },
          ]}
          onPress={onRegister}>
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
    marginTop: 16,
    flexDirection: 'row',
  },
  error: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    fontSize: 16,
    color: '#ff0000',
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

export default RegisterScreen;
