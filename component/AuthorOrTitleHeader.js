import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AuthorOrTitleHeader = ({route}) => {
  const navigation = useNavigation();
  const info = route?.params;
  const title = info ? info.title : '게시글';

  const goBack = () => {
    navigation.pop();
  };

  return (
    <View style={styles.block}>
      <Pressable onPress={goBack}>
        <Icon name="arrow-back" size={24} color="#000" />
      </Pressable>
      <View style={styles.textPosition}>
        <Text style={styles.textSize}>{title}</Text>
      </View>
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
  textPosition: {
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSize: {
    fontSize: 20,
  },
});

export default AuthorOrTitleHeader;
