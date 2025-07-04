import { View, Text, Image, ImageProps, ImageSourcePropType } from "react-native";
import { CircleDashed, CircleCheck } from "lucide-react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { SujeitoShow } from "@/type/TypeShow";
import { styles } from "../CardSorteio/styles";

export const sujeitoImages: Record<SujeitoShow, any> = {
    [SujeitoShow.sorrisoMaroto]: require("../../assets/cabas/SorrisoMaroto.jpg"),
    [SujeitoShow.Pablo]: require("../../assets/cabas/Pablo.jpg")
};

type props = ImageProps & {

    name: SujeitoShow
    src: ImageSourcePropType
}

export function CardSorteio({ name, src, ...rest }: props) {
  return (
    <View style={styles.main}>
      <View style={styles.icon}>
        <Text style={styles.nameText}>{name}</Text>
      </View>

      <View style={styles.ContainerImage}>
        <Image source={src} style={styles.image} />
      </View>
    </View>
  );
}

