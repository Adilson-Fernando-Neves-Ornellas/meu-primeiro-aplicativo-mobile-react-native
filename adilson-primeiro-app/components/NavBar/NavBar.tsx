import React, { useContext, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../Contexto/Context';
import { useNavigation } from '@react-navigation/native';
import imgcarrinho from '../../assets/carrinho-de-compras.png';
import NavBarStyle from './NavBarStyle';

const NavBar = () => {
  const { isLoggedIn, idUsuario, setIsLoggedIn } = useContext(AuthContext);

  const navigation = useNavigation();

  const desativarUsuario = () => {
    setIsLoggedIn(false);
  };

  const mostrarTodosProdutos = () => {
    navigation.navigate('/' as never);
  };

  const pagePedidos = () => {
    navigation.navigate('pedidos/' + idUsuario as never);
  };

  const pageLogin = () => {
    navigation.navigate('login' as never);
  };

  const pageCarrinho = () => {
    navigation.navigate('carrinho' as never);
  };

  useEffect(() => {
    console.log(isLoggedIn);
  }, []);

  return (
    <>
      <View style={NavBarStyle.navBarContainer}>
        <View style={NavBarStyle.containerMenuNavBar}>
          <Text style={NavBarStyle.tituloEcommerce}>
            <TouchableOpacity style={NavBarStyle.buttonHome} onPress={mostrarTodosProdutos}>
              <Text style={{color: 'white'}}>Home</Text>
            </TouchableOpacity>
          </Text>
          <View style={NavBarStyle.containerLoginEcarrinho}>
            <TouchableOpacity style={NavBarStyle.linkLogin} onPress={isLoggedIn ? pagePedidos : pageLogin}>
              <Text style={{color: 'white'}}>{isLoggedIn ? ' Meus pedidos' : 'Entrar'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={NavBarStyle.buttonCarrinho} onPress={pageCarrinho}>
              <Image style={NavBarStyle.imgCarrinho} source={imgcarrinho} />
            </TouchableOpacity>
            <Text style={isLoggedIn ? NavBarStyle.linkLogin : NavBarStyle.linkDesativado}>
              {isLoggedIn ? ' Sair' : ''}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};


export default NavBar;
