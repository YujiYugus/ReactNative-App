import React, { ForwardedRef, forwardRef, Fragment } from "react";
import { View, Text, TextInput, TextInputProps, TouchableOpacity, StyleProp, TextStyle } from 'react-native';   
import { style } from "./style";
// import { MaterialIcons } from '@expo/vector-icons'; -- Vou Tirar esse dps!
import { themas } from "../../global/themes";
import { FontAwesome, MaterialIcons, Octicons } from '@expo/vector-icons';

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
    React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
    React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLeft?: IconComponent, // Icones Nativos
    IconRight?: IconComponent,
    IconLeftName?: string,
    IconRightName?: string,
    title?: string,
    onIconLeftPress?: () => void, // Ação do icone
    onIconRightPress?: () => void,
    height?: number,
    labelStyle?: StyleProp<TextStyle>
}

export const Input = forwardRef<TextInput, Props>((Props, ref: ForwardedRef<TextInput> | null) => {
    const { IconLeft, IconRight, IconLeftName, IconRightName, title, onIconLeftPress, onIconRightPress,
        height, labelStyle, ...rest
    } = Props
    const calculateSizeWidth = () => {
        if (IconLeft && IconRight) {
            return '80%'
        } else if (IconLeft || IconRight) {
            return '90%'
        } else {
            return '100%'
        }
    }

    const calculateSizePaddingLeft = () => {
        if (IconLeft && IconRight) {
            return 0;
        } else if (IconLeft || IconRight) {
            return 10;
        } else {
            return 20;
        }
    }

    return (
        <Fragment>
            {title && <Text style={[style.titleInput, labelStyle]}>{title}</Text>}
            <View style={[style.boxInput, { paddingLeft: calculateSizePaddingLeft(), height:height||40 }]}>
                {IconLeft && IconLeftName && (
                    <TouchableOpacity onPress={onIconLeftPress} style={style.Button}>
                        <IconLeft name={IconLeftName as any} size={20} color={themas.colors.gray}
                            style={style.Icon} />
                    </TouchableOpacity>
                )}
                <TextInput
                    style={[
                        style.input, { width: calculateSizeWidth(), height: '100%' }
                    ]}
                    {...rest}
                />
                {IconRight && IconRightName && (
                    <TouchableOpacity onPress={onIconRightPress} style={style.Button}>
                        <IconRight name={IconRightName as any} size={20} color={themas.colors.gray}
                            style={style.Icon} />
                    </TouchableOpacity>
                )}
            </View>
        </Fragment>
    )
})

// import React from "react";
// import { Text, View, FlatList, TouchableOpacity } from "react-native";
// import { style } from "./style";
// import { Input } from "../../components/input";
// import { MaterialIcons } from '@expo/vector-icons';
// import { Ball } from "../../components/Ball";
// import { Flag } from "../../components/Flag";
// import { themas } from "../../global/themes";

// type PropCard = {
//     item: number,
//     title: string,
//     description: string,
//     flag: 'urgente' | 'opcional'
// }

// const data: Array<PropCard> = [
//     {
//         item: 0,
//         title: 'Realizar lição de casa',
//         description: 'página 18 ao 28',
//         flag: 'urgente'
//     },

//     {
//         item: 1,
//         title: 'Passear com o cachorro',
//         description: 'página 18 ao 28',
//         flag: 'urgente'
//     },
//     {
//         item: 2,
//         title: 'Sair pra tomar um sorvetão',
//         description: 'página 18 ao 28',
//         flag: 'urgente'
//     }
// ]
// export default function List() {

//     const _renderCard = (item: PropCard) => {
//         return (
//             <TouchableOpacity style={style.card}>
//                 <View style={style.rowCard}>
//                     <View style={style.rowCardLeft}>
//                         <Ball color="red" />
//                         <View>
//                             <Text>{item.title}</Text>
//                             <Text>{item.description}</Text>
//                         </View>
//                     </View>
//                       <Flag caption="Urgente" color={themas.colors.red} />
//                 </View>
//             </TouchableOpacity>
//         )
//     }
//     return (
//         <View style={style.container}>
//             <View style={style.header}>
//                 <Text style={style.greeting}>Bom dia,
//                     <Text style={{ fontWeight: 'bold' }}> Leonardo Pires</Text></Text>
//                 <View style={style.boxInput}>
//                     <Input
//                         IconLeft={MaterialIcons}
//                         IconLeftName="search"
//                     />
//                 </View>
//             </View>
//             <View style={style.boxList}>
//                 <FlatList
//                     data={data}
//                     style={{ marginTop: 40, paddingHorizontal: 30 }}
//                     keyExtractor={(item, index) => item.item.toString()}
//                     renderItem={({ item, index }) => { return (_renderCard(item)) }}
//                 />
//             </View>
//         </View>
//     )
// }