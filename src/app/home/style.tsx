import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent:"center",
    gap: 16,
    padding: 8,
    paddingHorizontal: 20
  },
  title: {
    color: '#f81fb4', // text-blue-500
    fontWeight: '500',
    fontSize: RFValue(40), // text-5xl ~40px    
    textAlign: 'center',
  },
  animation: {
    width: '87%',
    height: '32%',
  },
  instructionsTitle: {
    color: '#3B82F6',
    fontWeight: 'bold',
    fontSize: RFValue(30), // text-3xl
    textAlign: 'center',
  },
  instructionsBox: {
    backgroundColor: '#f81fb4', // bg-blue-800
    padding: 16,
    paddingVertical: 20,
    borderRadius: 12,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructionsText: {
    color: '#FFFFFF',
    fontSize: RFValue(16),
    textAlign: 'center',
    marginBottom: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 16, // Tailwind gap-4 ~= 16px
  },
  startButton: {
    backgroundColor: '#1E40AF',
    marginTop: 40,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: RFValue(24),
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    width: 320, // w-80
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: RFValue(20),
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#A855F7', // border-purple-500
    borderRadius: 8,
    padding: 12,
    fontSize: RFValue(16),
    marginBottom: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: '#9CA3AF', // bg-gray-400
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
  },
  confirmButton: {
    backgroundColor: '#3B82F6', // bg-blue-500
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
  },
  modalButtonText: {
    color: '#FFFFFF',
    fontSize: RFValue(16),
  },
  content: {
    gap: 16
  },
  header: {
    flexDirection: "row", 
    marginTop: 40, 
    width: "100%", 
    justifyContent: "space-between", 
    paddingHorizontal: RFValue(16)
  },

  acessoRestritoButton: {
    backgroundColor: "#7e22ce", // tailwind bg-purple-500
    padding: 16, // tailwind p-4
    borderRadius: 8, // tailwind rounded-md
    marginBottom: 12, // tailwind mb-3
  },
  sorteioButton: {
    backgroundColor: "#16a34a", // tailwind bg-green-600
    padding: 16, // tailwind p-4
    borderRadius: 8, // tailwind rounded-md
  },
  closeButton: {
    marginTop: 16, // tailwind mt-4
  },
  modalButtonText2: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  closeButtonText: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
  }

})