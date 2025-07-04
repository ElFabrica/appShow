import { Container } from "lucide-react-native";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  main: {
    backgroundColor: "#FFFFFF",
    borderRadius: RFValue(10),
    paddingTop: 10,
    paddingHorizontal: 4,
        width: RFValue(150),
        height:RFValue(160),
  },
        content:{
        gap: RFValue(10),
        backgroundColor:"#FFFFFF",
        borderRadius:RFValue(10),

    },
    image:{
        width: RFValue(120),
        height:RFValue(120),
        borderRadius:10
    },
    ContainerImage:{
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center"
        
    },icon:{
        alignItems:"center",
        flexDirection:"row",
        gap:RFValue(8),
        justifyContent:"center"
    },
    nameText:{
        fontSize:RFValue(16),
        textAlign:"center",
        fontWeight:700,
        color:"#333333",
    }

})