import React, {useState} from 'react';
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
  const [like, setLike] = useState(0);
  const [unLike, setUnLike] = useState(0);

  const onLike = () => {
    if (unLike === 0) {
      setLike(pre => pre + 1);
    } else {
      setLike(pre => pre + 1);
      setUnLike(pre => pre - 1);
    }
  };

  const onUnLike = () => {
    if (like === 0) {
      setUnLike(pre => pre + 1);
    } else {
      setUnLike(pre => pre + 1);
      setLike(pre => pre - 1);
    }
  };

  const formatDate = date => {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    };
    return new Date(date).toLocaleString('en-GB', options);
  };

  return (
    <View style={styles.block}>
      <View style={[styles.border, styles.title]}>
        <Text style={styles.writeTitle}>{info.title}</Text>
        <Text style={styles.writeId}>{info.nickName}</Text>
        <Text style={styles.writeDate}>
          {formatDate(info.date).split(',').join('')}
        </Text>
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
          ]}
          onPress={onLike}>
          <Text>
            <Icon name="thumb-up" size={27} />
            {like}
          </Text>
        </Pressable>
        <Pressable
          style={({pressed}) => [
            Platform.OS === 'ios' &&
              pressed && {
                backgroundColor: '#efefef',
              },
          ]}
          onPress={onUnLike}>
          <Text>
            <Icon name="thumb-down" size={27} />
            {unLike}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
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
