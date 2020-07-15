import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  SafeAreaView,
  Image,
  FlatList,
} from "react-native";
import axios from "axios";
import Listing from "./components/post/index";
import Home from "./screens/home";
import Navigator from "./routes/stack";

export default function App() {
  return <Navigator />;
}
