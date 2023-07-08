import React from 'react';
import {StyleSheet} from 'react-native';
import HomeHeader from '../component/HomeHeader';
import HomeCafeteria from '../component/HomeCafeteria';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.block}>
      <HomeHeader />
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
