import React from 'react';
import {View, StyleSheet} from 'react-native';
import DetailCommentList from './DetailCommentList';

const DetailComment = ({route}) => {
  return (
    <View style={styles.block}>
      <DetailCommentList route={route} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: '#e4e4e4',
  },
});

export default DetailComment;
