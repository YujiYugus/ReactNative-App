import React from "react";
import { Text, View, Image, TextInput } from "react-native";
import { style } from "./styles"
import Logo from "../../assets/logo (1).png"

export default function Login () {
    return (
        < View style = { style.container} >
            <View style={style.boxTop}>
                <Image
                source={Logo}
                style ={style.logo}
                resizeMode="contain"
                />
                <Text style={style.text}>Bem vindo de volta!</Text>
            </View>
            <View style={style.boxMid}>
                <Text style={style.titleInput}>ENDEREÇO DE E-MAIL</Text>
                <View style={style.boxInput}>
                    <TextInput 
                        style={style.input}
                    />
                </View>
                <Text style={style.titleInput} >Senha</Text>
                <TextInput />
            </View>
            <View style={style.boxBotton}>
            </View>
        </View>

    )
}