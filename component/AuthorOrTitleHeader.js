import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AuthorOrTitleHeader = ({name}) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.pop();
  };

  return (
    <View style={styles.block}>
      <Pressable onPress={goBack}>
        <Icon name="arrow-back" size={24} color="#000" />
      </Pressable>
      <Text style={styles.textMarginLeft}>000님의 글</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    height: 48,
    backgroundColor: '#aaa',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  textMarginLeft: {
    marginLeft: 110,
    fontSize: 24,
  },
});

export default AuthorOrTitleHeader;
