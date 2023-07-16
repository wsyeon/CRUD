import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchUp from '../component/SearchUp';
import WritingList from '../component/WritingList';
import FloatingWriteButton from '../component/FloatingWriteButton';

const WritingScreen = () => {
  return (
    <SafeAreaView style={styles.block}>
      <SearchUp name="search" color="#fff" marginBottom />
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
