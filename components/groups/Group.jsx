import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Usa íconos si usas Expo
import AddGroupModal from "./AddGroupModal"; // Ajusta el path si es necesario


const Group = ({ data }) => {
  const navigation = useNavigation();
  const [showAddGroup, setShowAddGroup] = useState(false);

  const handlePress = () => {
    guardarGroupID();
    navigation.navigate("MenuGroup", { data });
  };

  const guardarGroupID = async () => {
    try {
      if (Platform.OS === "web") {
        localStorage.setItem("groupID", data.idCourse.toString());
      } else {
        await AsyncStorage.setItem("groupID", data.idCourse.toString());
      }
    } catch (error) {
      console.error("Error guardando groupID:", error);
    }
  };

  const handleEdit = () => {
    setShowAddGroup(true);
  };

  return (
    <>
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
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Información del grupo */}
          <View style={{ flex: 1, paddingRight: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#8B0000" }}>
              {data.strSubject}
            </Text>
            <Text style={{ color: "#5C5C5C" }}>Grado: {data.intGrade}</Text>
            <Text style={{ color: "#5C5C5C" }}>Salón: {data.strClassroom}</Text>
            <Text style={{ color: "#5C5C5C" }}>Hora: {data.strHour}</Text>
          </View>

          {/* Botón de edición */}
          <TouchableOpacity
            onPress={handleEdit}
            style={{
              backgroundColor: "#8B0000",
              padding: 8,
              borderRadius: 8,
            }}
          >
            {/* Ícono con Ionicons o simple texto ✏️ */}
            <Ionicons name="create-outline" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      {/* Modal de edición */}
      {showAddGroup && (
        <AddGroupModal
          visible={showAddGroup}
          onClose={() => setShowAddGroup(false)}
          groupData={data} // Envías los datos del grupo actual
        />
      )}
    </>
  );
};

export default Group;
