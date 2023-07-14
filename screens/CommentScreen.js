import React from 'react';
import {StyleSheet} from 'react-native';
import AuthorOrTitleHeader from '../component/AuthorOrTitleHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import CommentContent from '../component/CommentContent';
import Search from '../component/Search';

const CommentScreen = ({route}) => {
  return (
    <SafeAreaView style={styles.block}>
      <AuthorOrTitleHeader route={route} />
      <CommentContent />
      <Search name="send" color="#000" whiteColor />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default CommentScreen;
