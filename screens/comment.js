import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Post from "../components/post/";
import Comment from "../components/comment/";

export default function App({ navigation }) {
  const [post, setPost] = useState(navigation.getParam("post"));
  const [comment, setComment] = useState([]);
  useEffect(() => {
    getListing();
  }, [post]);

  useEffect(() => {}, [comment]);

  const getListing = () => {
    let link = `https://www.reddit.com${post.data.permalink}.json`;
    axios
      .get(link)
      .then(function (response) {
        console.log("Fetched Comment");
        setComment(response.data[1].data.children);
      })
      .catch(function (error) {
        alert(error);
      });
  };

  return (
    <View style={styles.container}>
      <Post
        item={post}
        navigate={navigation.navigate}
        noBorder="1"
        style={styles.post}
      />
      {comment.length > 0 ? (
        <FlatList
          data={comment}
          renderItem={({ item }) => <Comment item={item} />}
        />
      ) : (
        <View />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  post: {
    marginBottom: 4,
  },
});
