import { StyleSheet } from 'react-native';

const CardProdutosStyles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: 'column',
    gap: 10,
    padding: 10,
    backgroundColor: 'rgb(250, 250, 250)',
    borderColor: 'rgb(204, 204, 204)',
    borderRadius: 8,
    shadowColor: 'rgb(204, 204, 204)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 2,
    transitionProperty: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
    transitionDuration: 200,
    marginBottom: 10
  },
  containerImgProd: {
    display: 'flex',
    justifyContent: 'center'
  },
  imgcard: {
    height: 180,
    resizeMode: 'cover'
  },
  containerInfoProd: {
    margin: 5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  nomeProd: {
    textAlign: 'center',
    fontSize: 20
  },
  precoProd: {
    textAlign: 'center',
    fontSize: 24
  },
  quantidadeProd: {
    textAlign: 'center'
  },
  buttonCompra: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#1E730D',
    color: 'white',
    transition: 'background-color 0.1s, color 0.1s'
  },
  buttonCompraHover: {
    backgroundColor: 'rgba(30, 115, 13, 0.8)',
    color: 'rgba(255, 255, 255, 0.8)'
  },
  buttonCompraActive: {
    backgroundColor: 'rgba(30, 115, 13, 0.65)',
  },
  buttonVerMais: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#0d6efd',
    color: 'white',
    transition: 'background-color 0.1s, color 0.1s'
  },
  buttonVerMaisHover: {
    backgroundColor: '#277dff',
    color: 'rgba(255, 255, 255, 0.8)'
  },
  buttonVerMaisActive: {
    backgroundColor: '#004ab9'
  },
  conteinerButtonquantidade: {
    display: 'flex',
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonAlterarQuantidade: {
    padding: 1.5,
    borderWidth: 0,
    backgroundColor: 'white'
  },
  textQuantidadeAlterada: {
    margin: 0,
    paddingLeft: 5,
    paddingRight: 5
  },
//   bttnFavoritarAtivado: {
//     padding: 10,
//     borderRadius: 20,
//     backgroundColor: 'rgb(255, 215, 0)',
//     marginBottom: 10,
//   },
//   bttnFavoritar: {
//     padding: 10,
//     borderRadius: 20,
//     backgroundColor: 'white',
//     marginBottom: 10,
//   },
});

export default CardProdutosStyles;
