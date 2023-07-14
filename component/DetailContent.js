import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Platform,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DetailContent = ({route}) => {
  const info = route?.params;

  return (
    <View style={styles.block}>
      <View style={[styles.border, styles.title]}>
        <Text style={styles.writeTitle}>{info.title}</Text>
        <Text style={styles.writeId}>{info.nickName}</Text>
        <Text style={styles.writeDate}>{info.date}</Text>
      </View>
      <ScrollView
        style={[styles.border, styles.body]}
        showsVerticalScrollIndicator={false}>
        <Text>{info.body}</Text>
      </ScrollView>
      <View style={[styles.border, styles.iconGroup]}>
        <Pressable
          style={({pressed}) => [
            Platform.OS === 'ios' &&
              pressed && {
                backgroundColor: '#efefef',
              },
          ]}>
          <Icon name="thumb-up" size={27} />
        </Pressable>
        <Pressable
          style={({pressed}) => [
            Platform.OS === 'ios' &&
              pressed && {
                backgroundColor: '#efefef',
              },
          ]}>
          <Icon name="thumb-down" size={27} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    height: 370,
    backgroundColor: '#fff',
  },
  title: {
    height: 60,
  },
  border: {
    borderBottomWidth: 2,
    borderBottomColor: '#e3e3e3',
  },
  body: {
    height: 270,
  },
  iconGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 40,
  },
});

export default DetailContent;
