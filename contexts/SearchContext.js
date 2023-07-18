import React, {createContext, useState} from 'react';

const SearchContext = createContext();

export const SearchContextProvider = ({children}) => {
  const [keyword, onChangeText] = useState('');

  return (
    <SearchContext.Provider value={{keyword, onChangeText}}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
