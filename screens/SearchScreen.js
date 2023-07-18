import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import EmptySeacrchResult from '../component/EmptySeacrchResult';
import WritingList from '../component/WritingList';
import SearchContext from '../contexts/SearchContext';
import {getWrite} from '../lib/write';

const SearchScreen = () => {
  const {keyword} = useContext(SearchContext);
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    const unsubscribe = getWrite(data => {
      setSearchList(data);
    });

    return () => unsubscribe;
  }, []);

  const filtered =
    keyword === ''
      ? []
      : searchList.filter(search =>
          [search.title, search.body].some(text => text.includes(keyword)),
        );

  if (keyword.trim() === '') {
    return <EmptySeacrchResult type="EMPTY_KEYWORD" />;
  }

  if (filtered.length === 0) {
    return <EmptySeacrchResult type="NOT_FOUND" />;
  }

  return (
    <View style={styles.block}>
      <WritingList search={filtered} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default SearchScreen;
