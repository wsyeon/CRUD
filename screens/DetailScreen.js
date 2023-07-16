import React from 'react';
import {StyleSheet} from 'react-native';
import AuthorOrTitleHeader from '../component/AuthorOrTitleHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import DetailContent from '../component/DetailContent';
import DetailComment from '../component/DetailComment';
import SearchDown from '../component/SearchDown';

const DetailScreen = ({route}) => {
  return (
    <SafeAreaView style={styles.block}>
      <AuthorOrTitleHeader />
      <DetailContent route={route} />
      <DetailComment route={route} />
      <SearchDown name="send" whiteColor color="#000" route={route} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default DetailScreen;
