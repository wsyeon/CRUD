import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import WriteEditior from '../component/WriteEditior';
import WriteHeader from '../component/WriteHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import {v4 as uuidv4} from 'uuid';
import {useNavigation} from '@react-navigation/native';
import {currentUserInfo} from '../lib/auth';
import {modifyWrite, userWrite} from '../lib/write';

const WriteScreen = ({route}) => {
  const wirteInfo = route?.params ?? '';
  const [title, setTitle] = useState(wirteInfo?.title ?? '');
  const [body, setBody] = useState(wirteInfo?.body ?? '');

  const navigation = useNavigation();

  const user = currentUserInfo();

  const onSave = async () => {
    const email = currentUserInfo().email;
    if (title.trim() === '' || body.trim() === '') {
      return;
    }
    try {
      if (wirteInfo === '') {
        userWrite({
          id: uuidv4(),
          email,
          title,
          body,
          date: new Date().toISOString(),
          nickName: user.displayName,
        });
      } else {
        modifyWrite({
          title,
          body,
          id: wirteInfo?.id,
        });
      }
      navigation.pop();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={styles.block}>
      <WriteHeader onSave={onSave} />
      <WriteEditior
        title={title}
        body={body}
        onChangeBody={setBody}
        onChangeTitle={setTitle}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default WriteScreen;
