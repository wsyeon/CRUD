import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {logOut} from '../lib/auth';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const signOut = () => {
    logOut()
      .then(() => navigation.navigate('Start'))
      .catch(e => console.log(e));
  };

  return (
    <View style={styles.block}>
      <Pressable onPress={signOut}>
        <Text>로그아웃</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {},
});

export default ProfileScreen;
