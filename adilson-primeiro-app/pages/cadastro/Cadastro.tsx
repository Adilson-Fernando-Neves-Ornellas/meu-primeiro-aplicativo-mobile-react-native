
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, Alert  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../Contexto/Context';
import { api } from '../../api/api';
import cadastroStyles from './CadastroStyle';

interface Usuario {
  id: number;
  nome: string,
  email: string,
  senha: string
}

export default function Cadastro() {
  const navigation = useNavigation();
  const { isLoggedIn } = useContext(AuthContext);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const cadastrar = async (e: any) => {
    e.preventDefault()
    if (nome != '' && senha != ''&& email != '' ){
      try {
        const response = await api.post('/usuarios', {nome, email, senha})
      } catch (error) {
        limpar();
        alert("Cliente Cadastrado com Sucesso, retornando a pagina de login!")
        navigation.navigate("login" as never);
      }
    }
  }

  function limpar(){
    setEmail('');
    setNome('');
    setSenha('')
  }

  return (
    <>
    <View style={cadastroStyles.container}>
      {isLoggedIn ? (
        <View>
          <Text style={cadastroStyles.text}>O usuário já está logado.</Text>
          <Button title="Sair" onPress={() => sair()} />
        </View>
      ) : (
        <View style={cadastroStyles.containerForm}>
          <Text style={cadastroStyles.text}>Faça seu Login</Text>
          <TextInput
            style={cadastroStyles.input}
            value={nome}
            onChangeText={(text) => setNome(text)}
            placeholder="Insira seu Nome"
            secureTextEntry
          />
          <TextInput
            style={cadastroStyles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Insira o email"
          />
          <TextInput
            style={cadastroStyles.input}
            value={senha}
            onChangeText={(text) => setSenha(text)}
            placeholder="Insira a senha"
            secureTextEntry
          />
          <View style={cadastroStyles.buttonContainer}>
            <Button title="Entrar" onPress={cadastrar} />
            <Button title="Limpar" onPress={() => limpar()} />
          </View>
        </View>
      )}
    </View>
  </>
  );
}


