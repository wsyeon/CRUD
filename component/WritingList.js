import React from 'react';
import {StyleSheet, View} from 'react-native';
import WritingListItem from './WritingListItem';

const WritingList = () => {
  return (
    <View style={styles.block}>
      <WritingListItem />
      <WritingListItem />
      <WritingListItem />
      <WritingListItem />
      <WritingListItem />
      <WritingListItem />
      <WritingListItem />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default WritingList;
