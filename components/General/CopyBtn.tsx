import React , {useState} from 'react';
import {FontAwesome , Foundation} from "@expo/vector-icons";
import {COLORS} from "../../constants/Colors";
import {Modal , StyleSheet , TouchableOpacity} from "react-native";

function CopyBtn(props) {
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
                <Foundation name={"clipboard-notes"} size={20} color={COLORS.white}/>
            </TouchableOpacity>
        </>

    );
}

export default CopyBtn;

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