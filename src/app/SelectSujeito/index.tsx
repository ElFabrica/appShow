import { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Alert,
  ScrollView,
  TouchableWithoutFeedback,
  Pressable,
  Keyboard
} from "react-native";

import { styles } from "./styles";
import LottieView from 'lottie-react-native';
import { userStorge, UserStorge } from "@/storge/users";
import MaskInput from 'react-native-mask-input'
import { StackRoutesProps } from "@/routes/StackRoutes";
import { Button } from "@/components/buttons";

import { SujeitoShow } from "@/type/TypeShow";
import { CardSujeito, sujeitoImages } from "@/components/card/index";
import { useRoute } from "@react-navigation/native"

type RouteParams =  StackRoutesProps <"selectSujeito">


export function SelectSujeito({ navigation, route }: StackRoutesProps<"selectSujeito">) {
const { params } = useRoute <RouteParams["route"]> ()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [sujeito, setSujeito] = useState<SujeitoShow>()
  const [user, setUser] = useState<userStorge>()



  //Função que salva o formulário no storge do smartphone
  async function onSubmit() {
    //Valida de algum dos dados estão vazios
    if (!(name && phone)) {
      Alert.alert("Erro", "Preencha todos os dados");
      return;
    }
    //Valida se o email é um email válido (Não verifica se o email existe)
    {/*if (!validator.validate(email)) {
      Alert.alert("Erro", "E-mail inválido");
      return;
    }*/}
    //Caso funcione tudo redondo
    const id = Math.random().toString(30).substring(2, 20);  // Gerar ID único
    try {
      const newItem = {
        id: Math.random().toString(36).substring(2),
        name,
        email,
        phone,
        sujeito
      }
      await UserStorge.add(newItem)
      // Limpeza do formulário
      setName("");
      setEmail("");
      setPhone("");
      setSujeito(undefined)

      // Navega para a próxima tela
      navigation.navigate("home");
    } catch (error) {
      console.error("Erro ao salvar dados no banco:", error);
      Alert.alert("Erro", "Não foi possível salvar os dados.");
    }
  }

  return (
    <View>
      {/*
    <ImageBackground source={require("../../assets/Background_with-logo.png")}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
         
          <View style={styles.content}>
              <Text style={styles.textOption}>
                Se fosse pra montar o line-up dos seus sonhos… quem seria a atração principal?
              </Text>
               <View style={styles.cabas}>
              <Pressable 
              onPress={()=> setSujeito(SujeitoShow.Pablo)}>
              <CardSujeito
              IsSelected={sujeito== SujeitoShow.Pablo}
              name={SujeitoShow.Pablo}
              src={sujeitoImages[SujeitoShow.Pablo]}
              
              />
              </Pressable>

              <Pressable 
              onPress={()=> setSujeito(SujeitoShow.sorrisoMaroto)}>
              <CardSujeito
              IsSelected={sujeito== SujeitoShow.sorrisoMaroto}
              name={SujeitoShow.sorrisoMaroto}
              src={sujeitoImages[SujeitoShow.sorrisoMaroto]}
              
              />
              </Pressable>
              
            </View>
          </View>

          {/* BOTÃO */}
          <View style={styles.Footer}>
            <Button title="Começar"
              onPress={onSubmit}
              disable={!isConfirmed}
            />

          </View>
        </ScrollView>
      </TouchableWithoutFeedback>

      {/*</ImageBackground>*/}
    </View>
  )
}