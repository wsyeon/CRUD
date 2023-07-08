import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const StartScreen = () => {
  const navigation = useNavigation();

  const gologin = () => {
    navigation.navigate('Login');
  };

  const goRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <SafeAreaView style={styles.block}>
      <View style={styles.startWrapper}>
        <View style={styles.logoWrapper}>
          <Text>logo</Text>
        </View>
        <View style={styles.loginAndRegister}>
          <Pressable style={styles.button} onPress={gologin}>
            <Text style={styles.textFont}>로그인</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={goRegister}>
            <Text style={styles.textFont}>회원가입</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  startWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoWrapper: {
    width: 333,
    height: 401,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c3c3c3',
    marginBottom: 40,
  },
  loginAndRegister: {
    flexDirection: 'row',
    width: 333,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFont: {
    fontSize: 24,
  },
});

export default StartScreen;
