import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomeHeader = ({userGradeInfo, name}) => {
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dayName = today.toLocaleDateString('ko-KR', {
    weekday: 'long',
  });

  return (
    <View style={styles.block}>
      <Text style={[styles.headFont, styles.headBigFont]}>
        {userGradeInfo.grade}학년 {userGradeInfo.gradeInfo} {name}
      </Text>
      <Text style={styles.headFont}>
        {dateString} {dayName}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    height: 80,
    backgroundColor: '#e3e3e3',
  },
  headFont: {
    fontSize: 16,
    marginBottom: 8,
  },
  headBigFont: {
    fontSize: 24,
    paddingTop: 10,
  },
});

export default HomeHeader;
