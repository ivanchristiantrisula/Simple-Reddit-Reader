import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import axios from "axios";
import Listing from "../components/post/index";

export default function Home(props) {
  const [listing, setListing] = useState([]);
  const [afterIDs, setAfterIDs] = useState([""]);

  useEffect(() => {
    getListing();
  }, []);

  const getListing = () => {
    let sub = "/";
    console.log(props);
    if (typeof props.route.params != "undefined") {
      sub = props.route.params.sub;
    }
    axios
      .get(`https://www.reddit.com${sub}.json?after=${afterIDs.slice(-1)[0]}`)
      .then(function (response) {
        console.log("fetched listing");
        let temp = listing;
        if (temp.length == 0) {
          setListing(response.data.data.children);
        } else {
          temp = temp.concat(response.data.data.children);
          setListing(temp);
        }
        temp = afterIDs;
        temp = temp.push(response.data.data.after);
      })
      .catch(function (error) {});
  };

  return (
    <View>
      <FlatList
        data={listing}
        renderItem={({ item }) => (
          <Listing
            item={item}
            navigate={props.navigation.navigate}
            noBorder="0"
          />
        )}
        onEndReached={() => {
          getListing();
        }}
      />
    </View>
  );
}
