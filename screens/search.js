import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, FlatList, Text } from "react-native";
import Search from "../components/search/index";
import Axios from "axios";
import { search } from "../utils/liveSearch";

export default App = (props) => {
  const [subs, setSubs] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getSubs();
  }, [searchText]);

  const getSubs = async () => {
    // Axios.get(`https://www.reddit.com/subreddits/search.json?q=${searchText}`)
    //   .then(function (response) {
    //     if (typeof response.data.data != "undefined") {
    //       setSubs(response.data.data.children);
    //     }
    //   })
    //   .catch(function (error) {
    //     alert(error);
    //   });

    const res = await search(
      `https://www.reddit.com/subreddits/search.json?q=${searchText}`
    );
    if (typeof res.data.data != "undefined") {
      setSubs(res.data.data.children);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textBox}
        onChangeText={(text) => {
          setSearchText(text);
        }}
      />
      <FlatList data={subs} renderItem={({ item }) => <Search item={item} />} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textBox: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "white",
  },
  subName: {
    color: "black",
    fontSize: 20,
  },
});
