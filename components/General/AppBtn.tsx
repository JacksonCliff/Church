import React, {useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View, ViewStyle, Text} from "react-native";
import {COLORS} from "../../constants/Colors";



type TransformStyle = {
    rotateX?: string;
    rotateY?: string;
    rotateZ?: string;
    scaleX?: number;
    scaleY?: number;
    translateX?: number;
    translateY?: number;
    // Add other transformation types as needed
};

type SquareStyle = ViewStyle & {
    transform?: TransformStyle[];
};

function AppBtn({text = "Start",color = "coral",onPress}) {


    return (
            <TouchableOpacity onPress={onPress} style={styles.container}>
                <View style={[styles.segment1,{backgroundColor:color}]}>
                    <View style={[styles.square,{backgroundColor:color}]}/>
                    <View style={[styles.square,{backgroundColor:color}]}/>
                </View>
                <View style={[styles.segment2,{backgroundColor:color}]}>
                    <Text style={styles.btnText}>{text}</Text>
                </View>
            </TouchableOpacity>

    );
}

export default AppBtn;

const styles = StyleSheet.create({
    container : {
        justifyContent:"center",
        alignItems:"center"
    },
    segment1 : {
        width : "94%",
        height : 36,
        position : "absolute",
        borderRadius : 10,
        justifyContent : "space-between",
        alignItems : "center",
        flexDirection : "row",
    },
    segment2 : {
        width : "90%",
        height : 46,
        borderRadius : 10,
        justifyContent : "center",
        alignItems : "center"

    },
    square : {
        width : 30,
        height : 30,
        transform : [{rotateX : '45deg'},{rotateZ : '45deg'}] as TransformStyle
    } as SquareStyle
    ,
    btnText : {
        color : COLORS.white,
        fontSize : 18
    }
})