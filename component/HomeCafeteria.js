import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomeCafeteria = () => {
  return (
    <View style={styles.block}>
      <Text style={styles.exampleText}>급식 or 시간표</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    height: 384,
    backgroundColor: '#333',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  exampleText: {
    fontSize: 48,
    color: '#fff',
  },
});

export default HomeCafeteria;
