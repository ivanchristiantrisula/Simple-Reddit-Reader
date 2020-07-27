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

  const calcuateTimeDiff = (postTime) => {
    const currTime = Math.round(new Date().getTime() / 1000);
    var d = Math.abs(currTime - postTime); // delta
    var r = {}; // result
    var s = {
      // structure
      year: 31536000,
      month: 2592000,
      week: 604800, // uncomment row to ignore
      day: 86400, // feel free to add your own row
      hour: 3600,
      minute: 60,
      second: 1,
    };

    Object.keys(s).forEach(function (key) {
      r[key] = Math.floor(d / s[key]);
      d -= r[key] * s[key];
    });

    if (r["year"] > 0) {
      return r["year"] + "y";
    } else if (r["month"] > 0) {
      return r["month"] + "mo";
    } else if (r["week"] > 0) {
      return r["week"] + "w";
    } else if (r["day"] > 0) {
      return r["day"] + "d";
    } else if (r["hour"] > 0) {
      return r["hour"] + "h";
    } else if (r["minute"] > 0) {
      return r["minute"] + "m";
    } else if (r["second"] > 0) {
      return r["second"] + "s";
    }
  };
  return (
    <TouchableOpacity
      onPress={() => {
        handlePostClick(props.item);
      }}
    >
      <View style={[styles.container]}>
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
            {props.item.data.subreddit_name_prefixed} • {props.item.data.author}{" "}
            • {calcuateTimeDiff(props.item.data.created)}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            width: "50%",
          }}
        >
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
          <View style={styles.score}>
            <Text
              style={{
                borderWidth: 1,
                borderRadius: 20,
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              {props.item.data.num_comments}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "white",
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
