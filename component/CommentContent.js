import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const CommentContent = () => {
  return (
    <View style={styles.block}>
      <View style={styles.writer}>
        <Text>아이디</Text>
        <Text>내용</Text>
      </View>
      <ScrollView
        style={styles.readerWrapper}
        contentContainerStyle={styles.readerContainer}>
        <View style={styles.reader}>
          <Text>아이디</Text>
          <Text>내용</Text>
        </View>
        <View style={styles.reader}>
          <Text>아이디</Text>
          <Text>내용</Text>
        </View>
        <View style={styles.reader}>
          <Text>아이디</Text>
          <Text>내용</Text>
        </View>
        <View style={styles.reader}>
          <Text>아이디</Text>
          <Text>내용</Text>
        </View>
      </ScrollView>
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
