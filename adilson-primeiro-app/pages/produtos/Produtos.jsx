import {View} from 'react-native';
import { useEffect, useContext } from 'react';
import ProdutoStyles from './ProdutosStyle';
import CardProduto from '../../components/CardProdutos/CardProduto';
import { AuthContext } from '../../Contexto/Context';
import { api } from '../../api/api';
import NavBar from '../../components/NavBar/NavBar';

export default function Produtos() {
  const {listaProduto, setListaProduto} = useContext(AuthContext)

  const getProdutos = async () => {
    const response = await api.get("/produtos");
    const produtos = response.data;
    setListaProduto(produtos);
  };

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <>
    <NavBar/>
    <View style={ProdutoStyles.containerCard}>
      {listaProduto.map((produto) => (
        <CardProduto
        key={produto.id}
        id={produto.id}
        nome={produto.nome}
        preco={produto.preco}
        estoque={produto.estoque}
        descricao={produto.descricao}
        imgurl={produto.imgurl}
        />
        ))}
    </View>
    </>

  );
}


