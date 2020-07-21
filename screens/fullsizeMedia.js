import React, { Component } from "react";
import { View, Stylesheet, ScrollView } from "react-native";
import FastImage from "react-native-fast-image";

const index = (props) => {
  return (
    <View style={styles.container}>
      <FastImage
        style={styles.media}
        source={{ uri: props.route.params.url }}
      />
    </View>
  );
};

export default index;

const styles = {
  container: {
    flex: 1,
    alightItems: "center",
    textAlign: "center",
    width: "100%",
  },
  media: {
    flex: 1,
    resizeMode: "contain",
  },
};
