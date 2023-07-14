import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import WritingListItem from './WritingListItem';
import {getWrite} from '../lib/write';

const WritingList = () => {
  const [writeList, setWriteList] = useState([]);

  useEffect(() => {
    const unsubscribe = getWrite(data => {
      setWriteList(data);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <FlatList
      data={writeList}
      style={styles.block}
      renderItem={item => <WritingListItem data={item} />}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      keyExtractor={log => log.id}
    />
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
    width: '100%',
  },
});

export default WritingList;
