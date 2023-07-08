import React from 'react';
import {StyleSheet} from 'react-native';
import WriteEditior from '../component/WriteEditior';
import WriteHeader from '../component/WriteHeader';
import {SafeAreaView} from 'react-native-safe-area-context';

const WriteScreen = () => {
  return (
    <SafeAreaView style={styles.block}>
      <WriteHeader />
      <WriteEditior />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default WriteScreen;
