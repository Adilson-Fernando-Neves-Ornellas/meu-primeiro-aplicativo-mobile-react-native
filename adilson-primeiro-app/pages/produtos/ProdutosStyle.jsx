import { StyleSheet } from 'react-native';

const ProdutoStyles = StyleSheet.create({
    containerCard:{
      display:"flex",
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      overflowY: 'hidden',
      padding: 20,
      gap: 10,
      objectFit: 'contain',
      overflow: 'scroll'
  }
});

export default ProdutoStyles;