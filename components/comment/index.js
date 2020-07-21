import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
const Comment = (props) => {
  const renderComment = () => {
    return (
      <View>
        <Text style={styles.author}>{props.item.data.author}</Text>
        <Text>{props.item.data.body}</Text>
        {typeof props.item.data.replies !== "string" &&
        props.item.data.replies != "" &&
        typeof props.item.data.replies !== "undefined" ? (
          <FlatList
            data={props.item.data.replies.data.children}
            renderItem={({ item }) => <Comment item={item} />}
          />
        ) : (
          <View />
        )}
      </View>
    );
  };
  return (
    <View
      style={[
        styles.container,
        props.item.data.depth == 0
          ? { borderBottomWidth: 1, borderBottomColor: "lightgrey" }
          : "",
      ]}
    >
      {props.item.data.body != null ? renderComment() : null}
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 8,
    paddingTop: 4,
    paddingBottom: 4,
    marginBottom: 4,
    height: "auto",
    backgroundColor: "white",
    borderLeftWidth: 1,
    borderLeftColor: "lightgrey",
  },
  author: {
    color: "#6A93CB",
    marginBottom: 2,
  },
});
