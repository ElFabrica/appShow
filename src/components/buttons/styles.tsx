import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#5DE2E7",
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        padding: 20, // mantém espaçamento interno
        // Remover height fixa
        alignSelf: "flex-start", // impede de esticar se o pai permitir
        width: '100%',
        height:"auto"
    },
    title: {
        color: "#FFFFFF",
        fontWeight: "600"
    },isSelected:{
        opacity:0.4
    }
});