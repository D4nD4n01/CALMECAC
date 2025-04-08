// Group.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Group = ({ nombre, salon, hora, idGrupo }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("MenuGroup", {
      nombre,
      idGrupo,
    });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={{
        backgroundColor: "white",
        padding: 16,
        marginBottom: 12,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{nombre}</Text>
        <Text>Salón: {salon}</Text>
        <Text>Hora: {hora}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Group;
