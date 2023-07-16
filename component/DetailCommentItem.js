import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {formatDate} from './WritingListItem';

const DetailCommentItem = ({data, route}) => {
  const navigation = useNavigation();
  const info = route?.params;
  const {title} = info;
  const {item} = data;

  const goComment = () => {
    navigation.navigate('Comment', {
      title,
      item,
    });
  };

  return (
    <View style={styles.commentBorder}>
      <View style={{flexDirection: 'row'}}>
        <Text>{item.nickName}</Text>
        <Text>{formatDate(item.date)}</Text>
      </View>
      <Text>{item.comment}</Text>
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
