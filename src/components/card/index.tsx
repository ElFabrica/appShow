import { View, Text, Image,ImageProps } from "react-native";
import { CircleDashed, CircleCheck } from "lucide-react-native";
import { RFValue } from "react-native-responsive-fontsize";

type props = ImageProps & {
        src: string
        selected: boolean
    }
function card({selected, src, ...rest}: props) {
    
    return(
        <View>
            <View>{ selected === true? <CircleCheck size={RFValue(20)} />: <CircleDashed size={RFValue(20)} />}
            </View>
            <View>
                <Text>

                </Text>
                <Image source={require("")}/>
            </View>

        </View>
    )
}