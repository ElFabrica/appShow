import { Container } from "lucide-react-native";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    main:{
        height:"auto",
        gap: RFValue(10)
    },
    image:{
        width: RFValue(200),
        height:RFValue(200),
        borderRadius:10
    },
    ContainerImage:{
        borderRadius:10
        
    },icon:{
        alignItems:"center",
        flexDirection:"row",
        gap:RFValue(8),
        justifyContent:"center"
    },
    nameText:{
        fontSize:RFValue(16),
        textAlign:"center"
    }

})