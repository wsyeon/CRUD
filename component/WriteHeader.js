import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import TransparentCircleButton from './TransparentCircleButton';

const WriteHeader = ({onSave}) => {
  const navigation = useNavigation();

  const onGoBack = () => {
    navigation.pop();
  };

  const onCancel = () => {
    Alert.alert(
      '작성중인 글을 취소하시겠습니까?',
      '작성중인 글을 취소하시겠습니까? 취소하시면 지금까지 작성한 내용이 사라집니다.',
      [
        {
          text: '취소',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => navigation.pop(),
        },
      ],
    );
  };

  return (
    <View style={styles.block}>
      <View style={styles.iconButtonWrapper}>
        <TransparentCircleButton
          onPress={onGoBack}
          name="arrow-back"
          color="#424242"
        />
      </View>
      <View style={styles.buttons}>
        <TransparentCircleButton
          name="delete-forever"
          color="#ef5350"
          onPress={onCancel}
          hasMarginRight
        />
        <TransparentCircleButton
          name="check"
          color="#009688"
          onPress={onSave}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default WriteHeader;
