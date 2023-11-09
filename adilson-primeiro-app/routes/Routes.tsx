import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "../pages/login/Login";
import Cadastro from '../pages/cadastro/Cadastro';
import Produtos from '../pages/produtos/Produtos';

export default function Routes() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator initialRouteName="/produtos">
        <Stack.Screen name="/produtos" component={Produtos} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="cadastro" component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  )};