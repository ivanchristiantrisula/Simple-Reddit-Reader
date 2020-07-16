import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { View, Text, StyleSheet } from "react-native";
import Post from "../components/post/";

export default function App({ navigation }) {
  const [post, setPost] = useState(navigation.getParam("post"));
  const [comment, setComment] = useState({});
  useEffect(() => {
    getListing();
  }, [post]);

  const getListing = () => {
    let link = post.permalink;
    axios
      .get(`https://www.reddit.com${link}.json`)
      .then(function (response) {
        console.log(response.data[0].data);
        setComment(response.data[0].data);
      })
      .catch(function (error) {});
  };

  return (
    <View style={styles.container}>
      <Post item={post} navigate={navigation.navigate} noBorder="1" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
  },
});
