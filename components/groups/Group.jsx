import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const Group = ({ data }) => {
  const navigation = useNavigation();

  useEffect(() => {
    console.log("group: ", data);
  }, []);

  const handlePress = () => {
    guardarGroupID();
    navigation.navigate("MenuGroup", { data });
  };

  const guardarGroupID = async () => {
    try {
      if (Platform.OS === "web") {
        localStorage.setItem("groupID", data.IdGroup.toString());
      } else {
        await AsyncStorage.setItem("groupID", data.IdGroup.toString());
      }
    } catch (error) {
      console.error("Error guardando groupID:", error);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={{
          backgroundColor: "#FFF5F5",
          padding: 16,
          marginBottom: 12,
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
          borderLeftWidth: 5,
          borderLeftColor: "#8B0000",
        }}
      >
        {/* Materia como título */}
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#8B0000" }}>
          {data.Materia}
        </Text>

        {/* Grado, Salón y Hora como texto secundario */}
        <Text style={{ color: "#5C5C5C" }}>Grado: {data.IdGroup}</Text>
        <Text style={{ color: "#5C5C5C" }}>Salón: {data.salon}</Text>
        <Text style={{ color: "#5C5C5C" }}>Hora: {data.hora}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Group;
