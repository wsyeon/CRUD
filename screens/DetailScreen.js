import React from 'react';
import {StyleSheet} from 'react-native';
import AuthorOrTitleHeader from '../component/AuthorOrTitleHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import DetailContent from '../component/DetailContent';
import DetailComment from '../component/DetailComment';
import Search from '../component/Search';

const DetailScreen = () => {
  return (
    <SafeAreaView style={styles.block}>
      <AuthorOrTitleHeader />
      <DetailContent />
      <DetailComment />
      <Search name="send" whiteColor color="#000" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default DetailScreen;
