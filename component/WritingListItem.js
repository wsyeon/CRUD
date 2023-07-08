import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

const WritingListItem = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Detail');
  };

  return (
    <Pressable style={styles.item} onPress={onPress}>
      <Text style={styles.title}>title: Test</Text>
      <Text style={styles.date}>date: {new Date().toISOString()}</Text>
      <Text style={styles.body}>body: Test입니다</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    borderColor: '#666',
    borderWidth: 2,
    height: 80,
  },
  title: {
    color: '#263238',
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    color: '#37474f',
    lineHeight: 21,
  },
  date: {
    fontSize: 12,
    color: '#546e7a',
    marginBottom: 8,
  },
});

export default WritingListItem;
