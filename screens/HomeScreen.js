import React from 'react';
import {StyleSheet} from 'react-native';
import HomeHeader from '../component/HomeHeader';
import HomeCafeteria from '../component/HomeCafeteria';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = ({route}) => {
  const router = route?.params;
  const {grade, gradeInfo, nickName} = router;
  const userGradeInfo = {grade, gradeInfo};
  const name = nickName;

  return (
    <SafeAreaView style={styles.block}>
      <HomeHeader userGradeInfo={userGradeInfo} name={name} />
      <HomeCafeteria />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default HomeScreen;
