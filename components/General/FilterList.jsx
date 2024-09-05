import React from 'react';
import {FlatList, ScrollView, Text, View} from "react-native";
import {FontAwesome5} from "@expo/vector-icons";
import {COLORS} from "../../constants/Colors";

function FilterList({data,title = "Filter"}) {
    return (
        <View style={{flex:1}}>
            <Text style={{fontWeight:"400",fontSize:16,color:COLORS.gray,marginBottom:10,marginLeft:15,marginTop:10}}>{title}</Text>
            <FlatList data={data} horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{width:"265%",flexWrap:"wrap",padding:15,paddingTop:0}} renderItem={({item}) => (

                            <View style={{paddingHorizontal:15,paddingVertical:10,backgroundColor : COLORS.white,borderRadius : 20,flexDirection:"row",margin:5}}>
                                <FontAwesome5 name={item.iconName} size={20}/>
                                <Text style={{marginLeft:5}}>{item.name}</Text>
                            </View>

            )}/>





        </View>
    );
}

export default FilterList;