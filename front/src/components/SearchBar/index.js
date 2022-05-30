import React, { useState } from 'react';
import { SearchBar as Search } from 'react-native-elements';
const SearchBar = ({searchText, setSearchText}) => {
    return (
        <Search
            placeholder="Pesquise aqui"
            containerStyle={{
                width: 315,
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: 40,
                marginBottom: 20,
                backgroundColor: "#fff",
                borderRadius: 7,
                borderTopWidth: 0,
                borderBottomWidth: 0
            }}
            inputContainerStyle={{
                backgroundColor: "#fff",
            }}
            round
            autoCorrect={false}
            value={searchText}
            onChangeText={(text)=>setSearchText(text)}
        />
    )
}

export default SearchBar;