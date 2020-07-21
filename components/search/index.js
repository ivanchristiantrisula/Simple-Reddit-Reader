import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FastImage from "react-native-fast-image";

export default App = (props) => {
  useEffect(() => {}, []);
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigate("Feed", { sub: props.item.data.url });
      }}
    >
      <View style={styles.container}>
        <FastImage
          style={styles.icon}
          source={{ uri: props.item.data.icon_img }}
        />
        <Text style={styles.name}>{props.item.data.display_name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 20,
    // paddingBottom: 20,
    height: 50,
    marginTop: 10,
    paddingLeft: 10,
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 30,
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    width: 30,
    height: 30,
  },
  name: {
    paddingLeft: 20,
  },
});
