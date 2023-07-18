import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, StyleSheet, Pressable, View, Alert} from 'react-native';
import {formatDistanceToNow, format} from 'date-fns';
import {ko} from 'date-fns/locale';
import {currentUserInfo} from '../lib/auth';
import {deleteWrite} from '../lib/write';

// 책에서 보고 가져온 부분
export const formatDate = date => {
  const d = new Date(date);
  const now = Date.now();
  const diff = (now - d.getTime()) / 1000;

  if (diff < 60 * 1) return '방금전';
  if (diff < 60 * 60 * 24 * 3)
    return formatDistanceToNow(d, {addSuffix: true, locale: ko});

  return format(d, 'PPP EEE p', {locale: ko});
};

// 책에서 보고 가져온 부분
export const truncate = text => {
  const replaced = text.replace(/\n/g, '');
  if (replaced.length <= 20) {
    return replaced;
  }
  return replaced.slice(0, 20).concat('...');
};

const WritingListItem = ({data}) => {
  const navigation = useNavigation();
  const {item} = data;
  const {title, body, date, nickName, id, email} = item;

  const onPress = () => {
    navigation.navigate('Detail', {
      title,
      body,
      date,
      nickName,
      id,
    });
  };

  const onDelete = userId => {
    Alert.alert(
      '게시물을 삭제하시겠습니까?',
      '삭제를 하시면 복구가 불가능합니다. 정말로 삭제하시겠습니까?',
      [
        {
          text: '취소',
          style: 'cancel',
        },
        {
          text: '삭제',
          onPress: () => deleteWrite(userId),
          style: 'destructive',
        },
      ],
    );
  };

  const onModify = () => {
    navigation.navigate('Write', {
      title,
      body,
      id,
    });
  };

  return (
    <Pressable style={styles.block} onPress={onPress}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.title}>{title}</Text>
        {email === currentUserInfo().email ? (
          <View>
            <Pressable onPress={() => onDelete(id)}>
              <Text>삭제</Text>
            </Pressable>
            <Pressable onPress={onModify}>
              <Text>수정</Text>
            </Pressable>
          </View>
        ) : (
          <></>
        )}
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.date}>{nickName}∘</Text>
        <Text style={styles.date}>{formatDate(date)}</Text>
      </View>
      <Text style={styles.body}>{truncate(body)}</Text>
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
