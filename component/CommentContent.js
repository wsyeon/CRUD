import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {formatDate} from './WritingListItem';
import {getReply} from '../lib/reply';
import CommentContentItem from './CommentContentItem';

const CommentContent = ({route}) => {
  const info = route?.params;
  const {item} = info;
  const {nickName, comment, date, id} = item;
  const [replyList, setReplyList] = useState([]);

  useEffect(() => {
    const unsubscribe = getReply(id, data => {
      setReplyList(data);
    });

    return () => unsubscribe;
  }, [id]);

  return (
    <View style={styles.block}>
      <View style={styles.writer}>
        <Text>{nickName}</Text>
        <Text>{formatDate(date)}</Text>
        <Text>{comment}</Text>
      </View>
      <FlatList
        data={replyList}
        renderItem={reply => <CommentContentItem reply={reply} />}
        keyExtractor={data => data.id}
      />
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

export default CommentContent;
