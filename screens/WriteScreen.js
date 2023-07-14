import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import WriteEditior from '../component/WriteEditior';
import WriteHeader from '../component/WriteHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import {v4 as uuidv4} from 'uuid';
import {useNavigation} from '@react-navigation/native';
import {currentUserInfo} from '../lib/auth';
import {userWrite} from '../lib/write';

const WriteScreen = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const navigation = useNavigation();

  const onSave = async () => {
    const email = currentUserInfo().email;
    try {
      userWrite({
        id: uuidv4(),
        email,
        title,
        body,
        date: new Date().toISOString(),
      });
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
