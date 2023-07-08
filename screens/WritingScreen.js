import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Search from '../component/Search';
import WritingList from '../component/WritingList';

const WritingScreen = () => {
  return (
    <SafeAreaView style={styles.block}>
      <Search name="search" color="#fff" marginBottom />
      <WritingList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default WritingScreen;
