import { StyleSheet } from 'react-native';

const NavBarStyle = StyleSheet.create({
  navBarContainer: {
    padding: 10,
    backgroundColor: '#05132E'
  },
  containerMenuNavBar: {
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  tituloEcommerce: {
    textAlign: 'center',
  },
  buttonHome: {
    borderWidth: 0
  },
  containerLoginEcarrinho: {
    display: 'flex',
    flexDirection:"row",
    alignItems: 'center',
    gap: 10,
  },
  linkLogin: {
    listStyle: 'none',
    color: '#fff',
    fontStyle: 'normal',
    textDecoration: 'none',
    border: 0,
    backgroundColor: 'transparent',
  },
  buttonCarrinho: {
    border: 0,
    backgroundColor: 'rgba(255, 255, 255)',
    color: 'white',
    borderRadius: 8,
  },
  imgCarrinho: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    border: 0,
    padding: 5,
    borderRadius: 8,
  },
  linkDesativado: {
    display: 'none'
  }
});

export default NavBarStyle;
