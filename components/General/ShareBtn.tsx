import React , {useState} from 'react';
import {Modal , StyleSheet , TouchableOpacity , View} from "react-native";
import {COLORS} from "../../constants/Colors";
import {FontAwesome} from "@expo/vector-icons";


function ShareBtn(props) {

    const [visible,setVisible] = useState(false);
    return (
        <>
            <Modal visible={ visible } style={{flex:1}} transparent>
                <TouchableOpacity onPress={()=> setVisible(false)} style={styles.container}>
                    <TouchableOpacity activeOpacity={1} style={styles.contentContainer}>

                    </TouchableOpacity>

                    {/*Choose Social Media Section*/}
                    <TouchableOpacity activeOpacity={1} style={styles.selectionContainer}>

                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
            <TouchableOpacity onPress={()=> setVisible(!visible)} style={styles.glassButton}>
                <FontAwesome name={"share"} size={20} color={COLORS.white}/>
            </TouchableOpacity>
        </>

    );
}

export default ShareBtn;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : COLORS.dark08,
        justifyContent : "space-between",
        alignItems : "center"
    },
    glassButton : {
        borderRadius : 50,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "rgba(255,255,255,0.3)",
        width : 35,
        height : 35
    },
    contentContainer : {
        width : "80%",
        height : "50%",
        backgroundColor : "red",
        marginTop : "20%"
    },

    selectionContainer : {
        width : "100%",
        height : "20%",
        backgroundColor : COLORS.white
    }
})