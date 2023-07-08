import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import DetailCommentItem from './DetailCommentItem';

const DetailCommentList = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <View style={{borderBottomWidth: 1, height: 30}}>
        <Text>댓글 0개</Text>
      </View>
      <DetailCommentItem />
      <DetailCommentItem />
      <DetailCommentItem />
      <DetailCommentItem />
      <DetailCommentItem />
      <DetailCommentItem />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  block: {},
});

export default DetailCommentList;
