import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WritingList from '../component/WritingList';
import FloatingWriteButton from '../component/FloatingWriteButton';

const WritingScreen = () => {
  return (
    <SafeAreaView style={styles.block}>
      <WritingList />
      <FloatingWriteButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default WritingScreen;
