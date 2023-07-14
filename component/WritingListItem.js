import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, StyleSheet, Pressable, View} from 'react-native';
import {formatDistanceToNow, format} from 'date-fns';
import {ko} from 'date-fns/locale';

const WritingListItem = ({data}) => {
  const navigation = useNavigation();
  const {item} = data;
  const {title, body, date, nickName} = item;

  const onPress = () => {
    navigation.navigate('Detail', {
      title,
      body,
      date,
      nickName,
    });
  };

  const formatDate = date => {
    const d = new Date(date);
    const now = Date.now();
    const diff = (now - d.getTime()) / 1000;

    if (diff < 60 * 1) return '방금전';
    if (diff < 60 * 60 * 24 * 3)
      return formatDistanceToNow(d, {addSuffix: true, locale: ko});

    return format(d, 'PPP EEE p', {locale: ko});
  };

  return (
    <Pressable style={styles.block} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.date}>{nickName}∘</Text>
        <Text style={styles.date}>{formatDate(date)}</Text>
      </View>
      <Text style={styles.body}>{body}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  title: {
    color: '#263238',
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    color: '#938c8c',
    lineHeight: 21,
    fontSize: 16,
  },
  date: {
    fontSize: 12,
    color: '#546e7a',
    marginBottom: 8,
  },
});

export default WritingListItem;
