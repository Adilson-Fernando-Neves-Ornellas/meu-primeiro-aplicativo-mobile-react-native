import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import stylesCadastro from './CadastroStyle';

export default function Cadastro() {
  return (
    <View style={stylesCadastro.container}>
      <Text>Page Cadastro</Text>
      <StatusBar style="auto" />
    </View>
  );
}


