import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import HomeCafeteriaInfo from './HomeCafeteriaInfo';
import {classInfo} from '../lib/class';

const HomeCafeteria = ({userGradeInfo}) => {
  const {grade, gradeInfo} = userGradeInfo;
  const date = new Date();
  const year = date.getFullYear();
  const moth = date.getMonth() + 1;
  const day = date.getDate().toString().padStart(2, '0');
  const dateInfo = `${year}${moth.toString().padStart(2, '0')}${day}`;
  const sem = moth >= 8 ? 2 : 1;

  const test = async () => {
    try {
      const row = await classInfo({grade, gradeInfo, year, sem, dateInfo});

      return row;
    } catch (e) {
      console.log(e);
      throw new Error('오늘 학교 일정은 없어요');
    }
  };

  const {
    isPending,
    isError,
    data: queryData,
    error,
  } = useQuery({
    queryKey: ['classInfo'],
    queryFn: test,
  });

  if (isPending) {
    return <HomeCafeteriaInfo isPending={true} />;
  }

  if (isError) {
    return <HomeCafeteriaInfo error={error} />;
  }

  return (
    <View style={styles.block}>
      <HomeCafeteriaInfo queryData={queryData} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    height: 384,
  },
});

export default HomeCafeteria;
