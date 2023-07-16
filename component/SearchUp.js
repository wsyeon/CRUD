import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchUp = ({name, whiteColor, color, marginBottom}) => {
  return (
    <View style={styles.block}>
      <View
        style={[
          styles.searchHeader,
          whiteColor && styles.whiteBackColor,
          marginBottom && styles.marginB,
        ]}>
        <TextInput style={styles.searchInput} placeholder="입력해주세요" />
        <Icon
          style={[styles.icon, whiteColor && styles.iconColor]}
          name={name}
          size={38}
          color={color}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {},
  searchHeader: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  marginB: {
    marginBottom: 50,
  },
  searchInput: {
    backgroundColor: '#fff',
    width: 274,
    height: 37,
    borderRadius: 15,
    paddingLeft: 10,
  },
  icon: {
    marginLeft: 16,
  },
  whiteBackColor: {
    backgroundColor: '#d9d9d9',
  },
});

export default SearchUp;
