import React from 'react';
import {StyleSheet, Pressable, Text, View} from 'react-native';
import HomeHeader from '../component/HomeHeader';
import HomeCafeteria from '../component/HomeCafeteria';
import {SafeAreaView} from 'react-native-safe-area-context';
import {logOut} from '../lib/auth';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = ({route}) => {
  const router = route?.params;
  const {grade, gradeInfo, nickName} = router;
  const userGradeInfo = {grade, gradeInfo};
  const name = nickName;
  const navigation = useNavigation();

  const signOut = () => {
    logOut()
      .then(() => navigation.navigate('Start'))
      .catch(e => console.log(e));
  };

  return (
    <SafeAreaView style={styles.block}>
      <HomeHeader userGradeInfo={userGradeInfo} name={name} />
      <HomeCafeteria userGradeInfo={userGradeInfo} />
      <View style={styles.logOut}>
        <Pressable onPress={signOut}>
          <Text style={styles.text}>로그아웃</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  logOut: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
  },
});

export default HomeScreen;
