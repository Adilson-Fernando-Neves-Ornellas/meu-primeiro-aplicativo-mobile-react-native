import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, Alert  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../Contexto/Context';
import { api } from '../../api/api';
import LoginStyles from './LoginStyle';

interface Usuario {
  id: number;
  nome: string,
  email: string,
  senha: string
}

const Login = () => {
  const navigation = useNavigation();
  const { isLoggedIn, setIsLoggedIn, setIdUsuario, idUsuario } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [usuario, setUsuario] = useState<Usuario | null>(null);;

  const irPaginaCadastro = () => {
    navigation.navigate('cadastro' as never);
  };

  const getUsuarios = async () => {
    const response = await api.get<Usuario[]>("/usuarios", {params: {email,senha}});
    setUsuario(response.data[0]);
  };

  const verificarLogin = (e:any) => {
    e.preventDefault();
    getUsuarios();
    if (usuario && usuario.id) {
      setIsLoggedIn(true)
      setIdUsuario(usuario.id)
      Alert.alert("Login efetuado com sucesso")
      // navigation.navigate("/pedidos/" + usuario.id as never);
      limpar();
    } else {
      Alert.alert("Erro no login")
    }
  };
  function sair(){
    setIsLoggedIn(false)
    setIdUsuario(0)
  }

  function limpar(){
    setEmail('');
    setSenha('')
  }

  return (
    <>
    <View style={LoginStyles.container}>
      {isLoggedIn ? (
        <View>
          <Text style={LoginStyles.text}>O usuário já está logado.</Text>
          <Button title="Sair" onPress={() => sair()} />
        </View>
      ) : (
        <View style={LoginStyles.containerForm}>
          <Text style={LoginStyles.text}>Faça seu Login</Text>
          <TextInput
            style={LoginStyles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Insira o email"
          />
          <TextInput
            style={LoginStyles.input}
            value={senha}
            onChangeText={(text) => setSenha(text)}
            placeholder="Insira a senha"
            secureTextEntry
          />
          <View style={LoginStyles.buttonContainer}>
            <Button title="Entrar" onPress={verificarLogin} />
            <Button title="Cadastrar-se" onPress={() => irPaginaCadastro()} />
          </View>
        </View>
      )}
    </View>
  </>
  );
};

export default Login;

