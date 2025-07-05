import { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  Alert,
  Modal,
} from "react-native";

import { styles } from "./styles";
import { userStorge, UserStorge } from "@/storge/users";
import { StackRoutesProps } from "@/routes/StackRoutes";
import { Button } from "@/components/buttons";
import { SujeitoShow } from "@/type/TypeShow";
import { CardSujeito, sujeitoImages } from "@/components/card/index";
import { useRoute } from "@react-navigation/native";

type RouteParams = StackRoutesProps<"selectSujeito">;

export function SelectSujeito({ navigation }: StackRoutesProps<"selectSujeito">) {
  const { params } = useRoute<RouteParams["route"]>();
  const id = params.id;

  const [isConfirmed, setIsConfirmed] = useState(false);
  const [sujeito, setSujeito] = useState<SujeitoShow>();
  const [user, setUser] = useState<userStorge>();
  const [showModal, setShowModal] = useState(false);

  async function handleUnicUser() {
    try {
      const userRefer = await UserStorge.getById(id);
      if (userRefer.length > 0) {
        console.log("Achei o dado:", userRefer[0]);
        setUser(userRefer[0]);
      } else {
        console.log("Não achei o dado");
      }
    } catch (error) {
      console.log("Algo ocorreu de errado para pegar o usuário cadastrado", error);
    }
  }

  async function onSubmit() {
    if (!user || !sujeito) return;

    try {
      await UserStorge.selectCaba(user, sujeito);

      // Mostra o modal de confirmação
      setShowModal(true);

      // Limpeza
      setSujeito(undefined);
      setIsConfirmed(false);

      // Fecha modal e navega depois de 2 segundos
      setTimeout(() => {
        setShowModal(false);
        navigation.navigate("home");
      }, 2000);

    } catch (error) {
      console.error("Erro ao salvar dados no banco:", error);
      Alert.alert("Erro", "Não foi possível salvar os dados.");
    }
  }

  useEffect(() => {
    handleUnicUser();
  }, []);

  return (
    <View style={styles.conteiner}>
      <View style={styles.content}>
        <Text style={styles.textOption}>
          Se fosse pra montar uma festa dos seus sonhos… quem seria a atração principal?
        </Text>

        <Pressable onPress={() => [setSujeito(SujeitoShow.Pablo), setIsConfirmed(true)]}>
          <CardSujeito
            IsSelected={sujeito === SujeitoShow.Pablo}
            name={SujeitoShow.Pablo}
            src={sujeitoImages[SujeitoShow.Pablo]}
          />
        </Pressable>

        <Pressable onPress={() => [setSujeito(SujeitoShow.sorrisoMaroto), setIsConfirmed(true)]}>
          <CardSujeito
            IsSelected={sujeito === SujeitoShow.sorrisoMaroto}
            name={SujeitoShow.sorrisoMaroto}
            src={sujeitoImages[SujeitoShow.sorrisoMaroto]}
          />
        </Pressable>
      </View>

      {/* BOTÃO */}
      <View style={styles.Footer}>
        <Button
          title="Confirmar"
          onPress={onSubmit}
          disable={!isConfirmed}
        />
      </View>

      {/* Modal de confirmação */}
      {showModal && (
        <Modal
        transparent={true}
        >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>🎉 Sucesso!</Text>
            <Text style={styles.modalText}>Seu cadastro foi registrado com sucesso.</Text>
          </View>
        </View>
        </Modal>
      )}
    </View>
  );
}
