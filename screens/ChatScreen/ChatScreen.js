import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Header from "./components/Header";
import ChatList from "./components/ChatList";

export default function ChatScreen() {
  return (
    <View>
      <Header title="Chat" />
      <ChatList />
    </View>
  );
}
