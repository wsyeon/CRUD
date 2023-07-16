import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import DetailCommentItem from './DetailCommentItem';
import {getWriteComments} from '../lib/comment';

const DetailCommentList = ({route}) => {
  const [comments, setComments] = useState([]);
  const info = route?.params;
  const {id} = info;

  useEffect(() => {
    const unsubscribe = getWriteComments(id, data => {
      setComments(data);
    });

    return () => unsubscribe;
  }, [id]);

  return (
    <View style={styles.block}>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <View style={{borderBottomWidth: 1, height: 30}}>
        <Text>댓글 {comments.length}개</Text>
      </View>
      <FlatList
        data={comments}
        renderItem={item => <DetailCommentItem data={item} route={route} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default DetailCommentList;
