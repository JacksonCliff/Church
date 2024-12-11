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
            fontSize : className === "small"? 14 : className === "medium"? 16 : className === "large"?  24 : 0,
            fontWeight : className === "small"? "400" : className === "medium"? "600" :className === "large"?  "900" : "200",
            color : color
        }}>
            {children}
        </Text>
    );
}

export default AppText;