import React, { useState } from 'react';
import { SearchBar as Search } from 'react-native-elements';
const SearchBar = () => {
    const [search, setSearch] = useState("");
    return (
        <Search
            placeholder="Pesquise aqui"
            containerStyle={{
                width: 315,
                marginLeft: "auto",
                marginRight: "auto",
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
            value={search}
            onChangeText={(text)=>setSearch(text)}
        />
    )
}

export default SearchBar;