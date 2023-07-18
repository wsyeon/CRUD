import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomeCafeteriaInfo = ({queryData, error, isPending}) => {
  const data = queryData ?? [];
  const classInfo = data.map(info => info.ITRT_CNTNT);

  if (isPending) {
    return (
      <View style={styles.block}>
        <Text style={styles.exampleText}>시간표 가져오는 중....</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.block}>
        <Text style={styles.errorText}>{error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.block}>
      {classInfo.map((classTime, idx) => (
        <Text style={styles.exampleText} key={idx}>
          {idx + 1}교시 {classTime}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: '#e9e9e9',
    borderRadius: 14,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 40,
  },
  exampleText: {
    fontSize: 24,
    color: '#2d2d2d',
  },
  errorText: {
    color: '#3e3e3e',
    fontSize: 30,
  },
});

export default HomeCafeteriaInfo;
