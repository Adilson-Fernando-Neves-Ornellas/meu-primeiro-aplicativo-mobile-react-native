import {View,FlatList} from 'react-native';
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
      <FlatList
        style={ProdutoStyles.containerCard}
        // horizontal={true}
        // initialNumToRender={5}
        numColumns={3}
        data={listaProduto}
        renderItem={({ item }) => (
          <CardProduto
            key={item.id}
            id={item.id}
            nome={item.nome}
            preco={item.preco}
            estoque={item.estoque}
            descricao={item.descricao}
            imgurl={item.imgurl}
          />
        )}
      />
    </>

  );
}


