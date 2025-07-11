import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  conteiner: {
    flexGrow: 1,
    paddingHorizontal: 24,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center"
  },

  Footer: {
    alignItems: 'center',
    marginTop: 16,
    justifyContent: "center",
    width: "100%"

  }, content: {
    gap: 16,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  animation: {
    width: '50%',
    height: RFValue(160),
  },
  title: {
    color: '#f81fb4', // text-blue-500
    fontSize: RFValue(32),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%'
  },
  inputLabel: {
    fontSize: RFValue(18),
    fontWeight: 'bold',
  },
  input: {
    color: "#333333",
    fontSize: RFValue(22),
    backgroundColor: "#FFFFFF",
    fontWeight: 600,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#46f23c",
    padding: 16,
    width: "100%",
    minHeight: "auto",
  },
  button: {
    padding: 16,
    borderRadius: 8,
    marginTop: 24,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLoaded: {
    backgroundColor: '#1E40AF', // bg-blue-800
  },
  buttonDisabled: {
    backgroundColor: '#9CA3AF', // bg-gray-400
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  }, header: {
    flexDirection: "row",
    marginTop: 40,
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 10
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  checkboxIcon: {
    fontSize: RFValue(20),
    marginRight: 10,
    marginTop: 2,
  },
  checkboxText: {
    flex: 1,
    fontSize: RFValue(14),
    color: "#333333",
  },
  cabas: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly"
  },
  textOption: {
    textAlign: "center",
    fontSize: RFValue(25)
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // preto com 50% de opacidade
    justifyContent: 'center',
    alignItems: 'center',


  },
  modalContent: {
    backgroundColor: '#fff',
    padding: RFValue(24),
    borderRadius: RFValue(16),
    alignItems: 'center',
    maxWidth: '80%',
  },
  modalTitle: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
    marginBottom: 8,
  },
  modalText: {
    fontSize: RFValue(16),
    textAlign: 'center',
  },


});