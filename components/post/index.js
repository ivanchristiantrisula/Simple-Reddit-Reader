import React, { useEffect, useState } from "react";
import FastImage from "react-native-fast-image";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  SafeAreaView,
  Image,
  FlatList,
  TouchableHighlight,
} from "react-native";

const Listing = (props) => {
  const renderMedia = (media) => {
    if (media.substr(-4).substr(0, 1) == ".") {
      return (
        <FastImage source={{ uri: media }} style={styles.imageThumbnail} />
      );
    }
  };
  const handlePostClick = (post) => {
    if (props.navigate != null) {
      props.navigate("Comment", { post: post });
    }
  };
  return (
    <TouchableHighlight
      onPress={() => {
        handlePostClick(props.item);
      }}
    >
      <View
        style={[
          styles.container,
          props.noBorder == 1
            ? { borderColor: "white" }
            : { borderColor: "black" },
        ]}
      >
        {renderMedia(props.item.data.url)}

        <Text style={styles.title}>{props.item.data.title}</Text>

        {props.item.data.selftext != "" ? (
          <Text numberOfLines={3} style={styles.selfText}>
            {props.item.data.selftext}
          </Text>
        ) : (
          <View></View>
        )}

        <View>
          <Text style={styles.subName}>
            Posted on {props.item.data.subreddit_name_prefixed} by /u/
            {props.item.data.author}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  imageThumbnail: {
    flex: 1,
    height: 200,
    width: "100%",
  },
  container: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#20232a",
    borderRadius: 6,
    marginHorizontal: 4,
    marginTop: 2,
    marginBottom: 6,
    padding: 6,
    color: "black",
    height: "auto",
  },
  selfText: {
    fontSize: 12,
  },

  subName: {
    marginTop: 6,
  },
});

export default Listing;
