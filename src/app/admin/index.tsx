import React, { useState } from 'react';
import { View, Text, Pressable, Modal } from 'react-native';
import { styles } from './styles';
import { SujeitoShow } from '@/type/TypeShow';
import { UserStorge, userStorge } from '@/storge/users';
import { CardSorteio } from '@/components/CardSorteio';
import { sujeitoImages } from '@/components/card';
import LottieView from 'lottie-react-native';

export function Admin() {
  const [isRunning, setIsRunning] = useState(false);
  const [winner, setWinner] = useState<userStorge | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [currentPrize, setCurrentPrize] = useState<SujeitoShow | null>(null);
  const [showModal2, setShowModal2] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);

  async function handleDraw(sujeito: SujeitoShow) {
    if (isRunning) return;
    setIsRunning(true);
    setCountdown(3);
    setCurrentPrize(sujeito);
    setShowModal2(true);

    try {
      const users = await UserStorge.get();
      const filtered = users.filter((user) => user.sorteio === sujeito);

      if (filtered.length === 0) {
        setIsRunning(false);
        setWinner(null);
        setShowModal2(false);
        setShowModal(true);
        return;
      }

      let count = 3;
      const interval = setInterval(() => {
        setCountdown(count);
        if (count === 0) {
          clearInterval(interval);
          const winnerUser = filtered[Math.floor(Math.random() * filtered.length)];
          setWinner(winnerUser);
          setShowModal2(false);
          setShowModal(true);
          setIsRunning(false);
        }
        count--;
      }, 1000);

    } catch (error) {
      setIsRunning(false);
      setShowModal2(false);
      console.log('Erro no sorteio:', error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎤 Painel de Sorteio</Text>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button} onPress={() => handleDraw(SujeitoShow.Pablo)}>
          <CardSorteio name={SujeitoShow.Pablo} src={sujeitoImages.Pablo} />
        </Pressable>
        <Pressable style={styles.button} onPress={() => handleDraw(SujeitoShow.sorrisoMaroto)}>
          <CardSorteio name={SujeitoShow.sorrisoMaroto} src={sujeitoImages['Sorriso Maroto']} />
        </Pressable>
      </View>

      {/* Modal do ganhador */}
      <Modal
        animationType="fade"
        transparent
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {winner ? (
              <>
                <LottieView
                  source={require('@/assets/animations/Congregations.json')} // substitua pelo seu arquivo
                  autoPlay
                  loop={false}
                  style={styles.lottie}
                />
                <Text style={styles.modalTitle}>🎉 Parabéns!</Text>
                <Text style={styles.modalText}>
                  O ganhador do sorteio do {currentPrize} é:
                </Text>
                <Text style={styles.modalWinner}>{winner.name}</Text>
              </>
            ) : (
              <>
                <Text style={styles.modalTitle}>⚠️ Sem participantes</Text>
                <Text style={styles.modalText}>
                  Nenhum participante para {currentPrize}.
                </Text>
              </>
            )}
            <Pressable style={styles.closeButton} onPress={() => setShowModal(false)}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Modal da contagem regressiva */}
      <Modal
        animationType="fade"
        transparent
        visible={showModal2}
        onRequestClose={() => setShowModal2(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.countdownText}>
              {countdown !== null ? countdown : ''}
            </Text>
            <Text style={styles.modalText}>
              Sorteio do {currentPrize} começando...
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}
