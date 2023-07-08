import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const DetailCommentItem = () => {
  const navigation = useNavigation();

  const goComment = () => {
    navigation.navigate('Comment');
  };

  return (
    <View style={styles.commentBorder}>
      <Text>아이디</Text>
      <Text>내용</Text>
      <Pressable onPress={goComment}>
        <Text>대댓글</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {},
  commentBorder: {
    borderBottomWidth: 1,
  },
});

export default DetailCommentItem;
