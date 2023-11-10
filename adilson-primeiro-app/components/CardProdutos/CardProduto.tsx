import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../Contexto/Context';
import { api } from '../../api/api';
import { useNavigation } from '@react-navigation/native';
import CardProdutosStyles from './CardProdutosStyles';

interface CardProdutoProps {
  id: number;
  nome: string;
  preco: number;
  estoque: number;
  imgurl: string;
}

interface Favorito {
  idUsuario: number;
}

const CardProduto: React.FC<CardProdutoProps> = ({ id, nome, preco, estoque, imgurl }) => {
  const { setListaCarrinho, listaCarrinho, listaProduto, setTemListaCarrinho, isLoggedIn, idUsuario } = useContext(AuthContext);
  const [quantidadeProd, setQuantidadeProd] = useState(0);
  const [mensagemQuantidadeMaxPermitida, setMensagemQuantidadeMaxPermitida] = useState('');
  const [clickFavorito, setClickFavorito] = useState(false);

  const navigation = useNavigation();

  const AdicionarIdUsuarioComoFavorito = async (id: number) => {
    if (!isLoggedIn) {
      alert('Não é possível adicionar aos favoritos antes de efetuar o login');
    } else {
      setClickFavorito(!clickFavorito);
      const response = await api.get(`/produtos/` + id);
      const produto = response.data;

      if (clickFavorito === true) {
        const index = produto.favoritos.findIndex((favorito: Favorito) => favorito.idUsuario === idUsuario);
        if (index !== -1) {
          produto.favoritos.splice(index, 1);
        }
      } else {
        if (!produto.favoritos.some((favorito: Favorito) => favorito.idUsuario === idUsuario)) {
          produto.favoritos.push({ idUsuario });
        }
      }

      await api.patch(`/produtos/` + id, produto);
    }
  };

  const verificarSeEFavoritoouNao = async (id: number) => {
    if (!isLoggedIn) {
      setClickFavorito(false);
    } else {
      const response = await api.get(`/produtos/` + id);
      const produto = response.data;
      const index = produto.favoritos.findIndex((favorito: Favorito) => favorito.idUsuario === idUsuario);

      if (index !== -1) {
        setClickFavorito(true);
      } else {
        setClickFavorito(false);
      }
    }
  };

  function diminuirQuantidade() {
    if (quantidadeProd > 0) {
      setMensagemQuantidadeMaxPermitida('');
      setQuantidadeProd(quantidadeProd - 1);
    }
  }

  function aumentarQuantidade() {
    if (quantidadeProd < estoque) {
      setQuantidadeProd(quantidadeProd + 1);
      setMensagemQuantidadeMaxPermitida('');
    } else {
      setMensagemQuantidadeMaxPermitida('Quantidade máxima');
    }
  }

  function pageproduto(id: number) {
    navigation.navigate('produto' + id as never);
  }

  const adicinarAoCarrinho = (id: number) => {
    if (quantidadeProd > 0) {
      const produtoSelecionado = listaProduto.find((prod) => prod.id === id);
      const produtoASerAdicionado = { ...produtoSelecionado, quantidadeProd };
      setListaCarrinho([...listaCarrinho, produtoASerAdicionado]);
      setTemListaCarrinho(true);
    }
  };

  useEffect(() => {
    verificarSeEFavoritoouNao(id);
  }, []);

  if (estoque > 0) {
    return (
      <View style={CardProdutosStyles.card}>
        <View style={CardProdutosStyles.containerImgProd}>
          <Image source={{ uri: imgurl }} style={CardProdutosStyles.imgcard} />
          <View>
            <Text style={CardProdutosStyles.containerInfoProd}>{nome}</Text>
            <Text style={CardProdutosStyles.nomeProd}>R$: {preco}</Text>
            <View style={CardProdutosStyles.conteinerButtonquantidade}>
              <TouchableOpacity style={CardProdutosStyles.buttonAlterarQuantidade} onPress={diminuirQuantidade}>
                <Text style={{ fontSize: 20, color: 'blue', marginRight: 5 }}>-</Text>
              </TouchableOpacity>
              <Text>{quantidadeProd}</Text>
              <TouchableOpacity style={CardProdutosStyles.buttonAlterarQuantidade} onPress={aumentarQuantidade}>
                <Text style={{ fontSize: 20, color: 'blue', marginLeft: 5 }}>+</Text>
              </TouchableOpacity>
            </View>
            <Text>{mensagemQuantidadeMaxPermitida}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={{ backgroundColor: clickFavorito ? 'red' : 'white', padding: 10, borderRadius: 5, marginVertical: 10, borderWidth: 1 }}
          onPress={() => AdicionarIdUsuarioComoFavorito(id)}
        >
          <Text>Favoritos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={CardProdutosStyles.buttonVerMais}
          onPress={() => pageproduto(id)}
        >
          <Text>Ver Mais</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={CardProdutosStyles.buttonCompra}
          onPress={() => adicinarAoCarrinho(id)}
        >
          <Text>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return null;
  }
};

export default CardProduto;
