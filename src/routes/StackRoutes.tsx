import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { userStorge } from "@/storge/users";


import { Form } from "@/app/form/index";
import { Home } from "@/app/home/index";
import { Users } from "@/app/users";
import { Admin } from "@/app/admin";
import { SelectSujeito } from "@/app/SelectSujeito";

export type StackRoutesList = {
  home: undefined;
  form: undefined;
  users: undefined;
  admin: undefined;
  selectSujeito: {id:string}
  
};

export type StackRoutesProps<T extends keyof StackRoutesList> =
  NativeStackScreenProps<StackRoutesList, T>;

const Stack = createNativeStackNavigator<StackRoutesList>();

export function StacksRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen
        name="form"
        component={Form}
        options={{
          headerShown: true,
          title: "Formulário",
        }}
      />
      
      
      <Stack.Screen
        name="users"
        component={Users}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="admin"
        component={Admin}
        options={{
          headerShown: true,
        }}
      />
        <Stack.Screen
        name="selectSujeito"
        component={SelectSujeito}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}