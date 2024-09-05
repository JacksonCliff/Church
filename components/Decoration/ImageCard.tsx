import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, ImageStyle } from "react-native";

interface ImageCardProps {
    imageSrc: ImageSourcePropType;
    height?: number;
}

const ImageCard: React.FC<ImageCardProps> = ({imageSrc,height = 200}) => {
    return (
        <Image source={imageSrc} resizeMode={"cover"} style={[styles.container,{height}]}/>
    );
}

export default ImageCard;

const styles = StyleSheet.create({
    container : {
        width : "100%",
        borderRadius : 20,
        position : "absolute",
        zIndex : -1
    }
})