import React, { useState } from 'react';
import { View, Text, Pressable, Alert } from 'react-native';
import tw from 'twrnc';
import { styles } from './styles';
import { SujeitoShow } from '@/type/TypeShow';
import { UserStorge } from '@/storge/users';
import { CardSujeito, sujeitoImages } from '@/components/card';
import { CardSorteio } from '@/components/CardSorteio';

export function Admin() {
  const [isRunning, setIsRunning] = useState(false);

  async function handleDraw(sujeito: SujeitoShow) {
    if (isRunning) return; // impede duplo clique
    setIsRunning(true);
    try {
      // faz busca dos usuários cadastrados com sorteio igual ao artista
      const users = await UserStorge.get();
      const filtered = users.filter((user) => user.sorteio === sujeito);

      if (filtered.length === 0) {
        Alert.alert('Ops', `Nenhum participante para ${sujeito}`);
        setIsRunning(false);
        return;
      }

      // drama do sorteio
      let count = 3;
      const interval = setInterval(() => {
        if (count === 0) {
          clearInterval(interval);
          const winner = filtered[Math.floor(Math.random() * filtered.length)];
          Alert.alert('🎉 Parabéns!', `O ganhador do sorteio do ${sujeito} é ${winner.name}!`);
          setIsRunning(false);
        } else {
          Alert.alert('Sorteando...', `${count}...`);
          count--;
        }
      }, 1000);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível realizar o sorteio');
      setIsRunning(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎤 Painel de Sorteio</Text>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button} onPress={() => handleDraw(SujeitoShow.Pablo)}>
          <Text style={styles.buttonText}>{SujeitoShow.Pablo}</Text>
          <CardSorteio
          name={SujeitoShow.Pablo}
          src={sujeitoImages.Pablo}

          />
        </Pressable>
        <Pressable style={styles.button} onPress={() => handleDraw(SujeitoShow.sorrisoMaroto)}>
          <CardSorteio
          name={SujeitoShow.sorrisoMaroto}
          src={sujeitoImages['Sorriso Maroto']}

          />
        </Pressable>
      </View>
    </View>
  );
}
