import { Container } from "lucide-react-native";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    main:{
        height:"auto"
    },
    image:{
        width: RFValue(100),
        height:RFValue(100),
        borderRadius:10
    },
    ContainerImage:{
        borderRadius:10
        
    },icon:{
        alignItems:"center"
    },
    nameText:{
        fontSize:RFValue(16),
        textAlign:"center"
    }

})