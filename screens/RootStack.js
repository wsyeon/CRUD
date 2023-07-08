import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MainTab from './MainTab';
import DetailScreen from './DetailScreen';
import StartScreen from './StartScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import CommentScreen from './CommentScreen';
import WriteScreen from './WriteScreen';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      {/* 글 세부 페이지 */}
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{headerShown: false}}
      />
      {/* 대댓글 페이지 */}
      <Stack.Screen
        name="Comment"
        component={CommentScreen}
        options={{headerShown: false}}
      />
      {/* 글쓰기 페이지 */}
      <Stack.Screen
        name="Write"
        component={WriteScreen}
        options={{headerShown: false}}
      />
      {/* 시작 페이지 */}
      <Stack.Screen
        name="Start"
        component={StartScreen}
        options={{headerShown: false}}
      />
      {/* 로그인 페이지 */}
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* 회원가입 페이지 */}
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
