import React from "react";
import { Text, View } from "react-native";
import { style } from "./styles";
import { Input } from "../../components/input";
import { MaterialIcons } from '@expo/vector-icons';

export default function List() {
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.greeting}>Bom dia, 
                    <Text style={{fontWeight: 'bold' }}>Yuji</Text></Text>
                    <View style={style.boxIput}>
                        <Input
                            IconLeft={MaterialIcons}
                            IconLeftName="search"
                        />
                    </View>
            </View>
        </View>
    )
}
