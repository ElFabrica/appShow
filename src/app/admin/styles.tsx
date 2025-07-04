import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7e7e7',
    alignItems: 'center',
    justifyContent: 'center',

  },
  title: {
    fontSize: RFValue(28),
    color: '#333333',
    marginBottom: 30,
    fontWeight:"600",
    textAlign: 'center',
  },
  buttonsContainer: {
    justifyContent: 'space-around',
    alignItems:"center",
    width: '100%',
    gap:RFValue(30)
  },
  button: {
    width: RFValue(150),
    height: RFValue(150),
    marginHorizontal: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: RFValue(30),
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: RFValue(24),
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalText: {
    fontSize: RFValue(18),
    textAlign: 'center',
    marginBottom: RFValue(20),
  },
  modalWinner: {
    fontSize: RFValue(22),
    fontWeight: 'bold',
    color: '#6200ee',
    textAlign: 'center',
    marginBottom: RFValue(20),
  },
  closeButton: {
    backgroundColor: '#6200ee',
    borderRadius: RFValue(10),
    paddingVertical: RFValue(10),
    paddingHorizontal: RFValue(20),
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  countdownText: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#6200ee',
    marginBottom: 20,
    textAlign: 'center',
  },
  lottie: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});
