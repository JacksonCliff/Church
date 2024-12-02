import React, {ReactNode} from 'react';
import { Text } from 'react-native'

interface props {
    children : ReactNode;
    className : "small" | "medium" | "large";
    color? : String;
}


function AppText({children,className,color = "black"} : props) {
    return (
        <Text style={{
            fontSize : className === "small"? 14 : className === "medium"? 16 : 24,
            fontWeight : className === "small"? "400" : className === "medium"? "600" : "900",
            color : color
        }}>
            {children}
        </Text>
    );
}

export default AppText;