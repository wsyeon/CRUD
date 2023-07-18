import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {formatDate, truncate} from './WritingListItem';
import {currentUserInfo} from '../lib/auth';
import {deleteComments} from '../lib/comment';

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

  const onDelete = userId => {
    deleteComments(userId);
  };

  return (
    <View style={styles.commentBorder}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          <Text>{item.nickName}</Text>
          <Text>{formatDate(item.date)}</Text>
        </View>
        {item.email === currentUserInfo().email ? (
          <Pressable onPress={() => onDelete(item.id)}>
            <Text>삭제</Text>
          </Pressable>
        ) : (
          <></>
        )}
      </View>
      <Text>{truncate(item.comment)}</Text>
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
