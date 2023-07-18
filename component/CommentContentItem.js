import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {formatDate} from './WritingListItem';
import {currentUserInfo} from '../lib/auth';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {deleteReply} from '../lib/reply';

const CommentContentItem = ({reply}) => {
  const {item} = reply;
  const {email, id} = item;

  const onDelete = userId => {
    deleteReply(userId);
  };

  return (
    <View style={[styles.block, styles.readerContainer]}>
      <View style={styles.reader}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingRight: 8,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text>{item.nickName}</Text>
            <Text>{formatDate(item.date)}</Text>
          </View>
          {email === currentUserInfo().email ? (
            <Pressable onPress={() => onDelete(id)}>
              <Text>삭제</Text>
            </Pressable>
          ) : (
            <></>
          )}
        </View>
        <Text>{item.reply}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  writer: {
    minHeight: 65,
  },
  readerWrapper: {
    flex: 1,
    marginTop: 8,
  },
  readerContainer: {
    alignItems: 'flex-end',
    marginRight: 10,
  },
  reader: {
    backgroundColor: '#e3e3e3',
    marginBottom: 5,
    minHeight: 65,
    width: '80%',
    borderRadius: 15,
    paddingLeft: 10,
  },
});

export default CommentContentItem;
