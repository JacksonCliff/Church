import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";
import {COLORS} from "../../constants/Colors";
import {colorCombo} from "../../assets/Data/UIData";

function shuffleArray<T>(array :T[]) : void {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

interface CardBoxProps {
    dotColor?: string;
    cards?: number[];
}

const colors = colorCombo;

const CardBox : React.FC<CardBoxProps> = ({dotColor,cards = [1,2]}) => {
    shuffleArray(colors)
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <FontAwesome name={"circle-o"} color={dotColor ?? COLORS.gray} style={styles.iconStyle}/>
                <Text style={{fontSize : 15,fontWeight:"600 "}}>Oct 6-12 </Text>
            </View>
            <View style={styles.cardContainer}>
                {cards.map((eachCard,index) => {
                    return(
                        <View key={eachCard} style={styles.card}>
                            <View style={styles.column1}>
                            </View>
                            <LinearGradient
                                // Background Linear Gradient
                                colors={[colors[index].gradient1, colors[index].gradient2]}
                                start={{ x: 0.1, y: 0.2 }}
                                style={styles.column2}
                            >

                            </LinearGradient>
                        </View>
                    )
                })}
            </View>
        </View>
    );
}

export default CardBox;

const styles = StyleSheet.create({
    container : {
    },
    row : {
        width : "100%",
        alignItems : "center",
        flexDirection : "row",
        marginTop : 5
    },
    iconStyle : {
        fontSize : 12,
        marginRight : 15
    },
    cardContainer : {
        paddingVertical : 10,
        paddingLeft : 10,
        borderLeftColor : COLORS.black,
        borderLeftWidth : 0.5,
        borderRadius : 0,
        marginLeft : 4
    },
    card : {
        width : "100%",
        height : 150,
        borderRadius : 10,
        flexDirection : "row",
        overflow : "hidden",
        borderColor : COLORS.black,
        marginBottom : 15
    },
    column1 : {
        backgroundColor : COLORS.white,
        flex : 1
    },
    column2 : {
        backgroundColor : COLORS.gray,
        flex : 2
    }
})