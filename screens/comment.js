import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { View, Text } from "react-native";

export default function App({ navigation }) {
  const [post, setPost] = useState(navigation.getParam("post").data);
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
    <View>
      <Text>{}</Text>
    </View>
  );
}
