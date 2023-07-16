import React from 'react';
import {StyleSheet} from 'react-native';
import AuthorOrTitleHeader from '../component/AuthorOrTitleHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import CommentContent from '../component/CommentContent';
import SearchDownReply from '../component/SearchDownReply';

const CommentScreen = ({route}) => {
  return (
    <SafeAreaView style={styles.block}>
      <AuthorOrTitleHeader route={route} />
      <CommentContent route={route} />
      <SearchDownReply name="send" color="#000" whiteColor route={route} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default CommentScreen;
