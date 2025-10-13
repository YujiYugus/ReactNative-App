import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { style } from "./stylesEdit";

export default function EditUser() {
  const navigation = useNavigation<NavigationProp<any>>();

  const [name, setName] = useState("Yuji Suguy");
  const [email, setEmail] = useState("yuji.suguy@email.com");
  const [avatar, setAvatar] = useState("https://cdn-icons-png.flaticon.com/512/149/149071.png");

  const handleSave = () => {
    Alert.alert("Sucesso", "As alterações foram salvas!");
    navigation.goBack(); // retorna para a tela anterior (User)
  };

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={style.backButton}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>

      <Text style={style.title}>Editar Perfil</Text>

      <Image source={{ uri: avatar }} style={style.avatar} />

      <Text style={style.label}>Nome</Text>
      <TextInput
        style={style.input}
        value={name}
        onChangeText={setName}
        placeholder="Digite seu nome"
      />

      <Text style={style.label}>E-mail</Text>
      <TextInput
        style={style.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
      />

      <TouchableOpacity style={style.saveButton} onPress={handleSave}>
        <Ionicons name="save-outline" size={22} color="#fff" />
        <Text style={style.saveText}>Salvar Alterações</Text>
      </TouchableOpacity>
    </View>
  );
}
