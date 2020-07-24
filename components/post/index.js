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
  TouchableOpacity,
} from "react-native";
import FullsizeMedia from "../../screens/fullsizeMedia";

const Listing = (props) => {
  const renderMedia = (media) => {
    if (media.substr(-4).substr(0, 1) == ".") {
      return (
        <TouchableOpacity
          onPress={() => {
            if (props.navigate != null) {
              props.navigate("Media", { url: media });
            }
          }}
        >
          <FastImage source={{ uri: media }} style={styles.imageThumbnail} />
        </TouchableOpacity>
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

        <Text
          style={[
            styles.title,
            props.item.data.stickied ? { color: "green" } : { color: "black" },
          ]}
        >
          {props.item.data.title}
        </Text>

        {props.item.data.selftext != "" ? (
          <Text numberOfLines={3} style={styles.selfText}>
            {props.item.data.selftext}
          </Text>
        ) : (
          <View></View>
        )}

        <View>
          <Text style={styles.subName}>
            {props.item.data.subreddit_name_prefixed} • /u/
            {props.item.data.author}
          </Text>
        </View>
        <View style={styles.score}>
          <Text
            style={{
              borderWidth: 1,
              borderRadius: 20,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            ∧ {props.item.data.score} V
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
    borderRadius: 10,
    marginHorizontal: 4,
    marginTop: 2,
    marginBottom: 6,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    color: "black",
    height: "auto",
  },
  selfText: {
    fontSize: 12,
  },

  subName: {
    marginTop: 6,
    marginBottom: 8,
  },

  score: {
    flex: 1,
    flexWrap: "wrap",
  },
});

export default Listing;
