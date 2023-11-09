import { StatusBar } from 'expo-status-bar';
import {Text, View, Button } from 'react-native';
import ProdutoStyles from './ProdutosStyle';
import { useNavigation } from '@react-navigation/native';

export default function Produtos() {
  const navigation = useNavigation();

  function PageLogin() {
    navigation.navigate('login');
  }

  return (
    <View style={ProdutoStyles.container}>
      <Text>Page Produtos</Text>
      <Button
        style={ProdutoStyles.buttonPageLogin}
        title="Pagina de Login"
        onPress={() => PageLogin()}
      />
      <StatusBar style="auto" />
    </View>
  );
}


