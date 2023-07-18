import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {writeComment} from '../lib/comment';
import {currentUserInfo} from '../lib/auth';
import {v4 as uuidv4} from 'uuid';

const SearchDown = ({name, whiteColor, color, marginBottom, route}) => {
  const [comment, setComment] = useState('');
  const {displayName, email} = currentUserInfo();
  const info = route?.params;
  const id = info?.id;

  const onSend = () => {
    writeComment({
      id: uuidv4(),
      referenceId: id,
      comment,
      nickName: displayName,
      date: new Date().toISOString(),
      email,
    });
    setComment('');
  };

  return (
    <View style={styles.block}>
      <View
        style={[
          styles.searchHeader,
          whiteColor && styles.whiteBackColor,
          marginBottom && styles.marginB,
        ]}>
        <TextInput
          style={styles.searchInput}
          placeholder="입력해주세요"
          value={comment}
          onChangeText={setComment}
          multiline
        />
        <Pressable onPress={onSend}>
          <Icon
            style={[styles.icon, whiteColor && styles.iconColor]}
            name={name}
            size={38}
            color={color}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {},
  searchHeader: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  marginB: {
    marginBottom: 50,
  },
  searchInput: {
    backgroundColor: '#fff',
    width: 274,
    height: 37,
    borderRadius: 15,
    paddingLeft: 10,
    paddingTop: 10,
  },
  icon: {
    marginLeft: 16,
  },
  whiteBackColor: {
    backgroundColor: '#d9d9d9',
  },
});

export default SearchDown;
