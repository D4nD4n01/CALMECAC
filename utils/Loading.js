// components/common/Loading.js (opcional, puedes incluirlo dentro del Login si prefieres)

import React from "react";
import { View, ActivityIndicator, Text } from "react-native";

const Loading = (color) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: color }}>
      <ActivityIndicator size="large" color="#0D47A1" />
      <Text style={{ marginTop: 10, color: "#0D47A1", fontWeight: "bold" }}>Cargando...</Text>
    </View>
  );
};

export default Loading;
