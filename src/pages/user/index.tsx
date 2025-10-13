import React from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { style } from "./styles";

export default function User() {
  const navigation = useNavigation<NavigationProp<any>>();

  const handleLogout = () => {
    Alert.alert("Saindo", "Você fez logout da sua conta!");
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  const handleEditProfile = () => {
  navigation.navigate("EditUser");
  };

  return (
    <View style={style.container}>
      <View style={style.profileContainer}>
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png" }}
          style={style.avatar}
        />
        <Text style={style.name}>Yuji Suguy</Text>
        <Text style={style.email}>yuji.suguy@email.com</Text>
      </View>

      <TouchableOpacity style={style.editButton} onPress={handleEditProfile}>
        <Ionicons name="create-outline" size={22} color="#fff" />
        <Text style={style.editText}>Editar Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.logoutButton} onPress={handleLogout}>
        <Ionicons name="exit-outline" size={24} color="#fff" />
        <Text style={style.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
