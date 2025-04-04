import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const MyGroups = () => {
  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#f8f9fa" }}>
      {/* Encabezado */}
      <View
        style={{
          backgroundColor: "#6F4F28", // Color marrón
          paddingVertical: 16,
          paddingHorizontal: 24,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          marginBottom: 16,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
          Mis Grupos
        </Text>
      </View>

      {/* Botón */}
      <View style={{ marginBottom: 32, alignItems: "center" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#6F4F28", // Color marrón
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Agregar grupo
          </Text>
        </TouchableOpacity>
      </View>

      {/* Mensaje de vacío */}
      <View style={{ marginTop: 50, alignItems: "center" }}>
        <Text style={{ fontSize: 16, color: "#6c757d" }}>
          No tienes grupos actualmente
        </Text>
      </View>
    </View>
  );
};

export default MyGroups;
