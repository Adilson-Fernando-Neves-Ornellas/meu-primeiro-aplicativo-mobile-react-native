
import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface AuthContextProps {
  listaProduto: any[]; // Substitua 'any' pelo tipo real de listaProduto
  setListaProduto: Dispatch<SetStateAction<any[]>>;
  listaCarrinho: any[]; // Substitua 'any' pelo tipo real de listaCarrinho
  setListaCarrinho: Dispatch<SetStateAction<any[]>>;
  temListaCarrinho: boolean;
  setTemListaCarrinho: Dispatch<SetStateAction<boolean>>;
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  idUsuario: number; // Substitua 'boolean' pelo tipo real de idUsuario
  setIdUsuario: Dispatch<SetStateAction<number>>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({
  listaProduto: [],
  setListaProduto: () => {},
  listaCarrinho: [],
  setListaCarrinho: () => {},
  temListaCarrinho: false,
  setTemListaCarrinho: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  idUsuario: 0,
  setIdUsuario: () => {},
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [listaProduto, setListaProduto] = useState<any[]>([]);
  const [listaCarrinho, setListaCarrinho] = useState<any[]>([]);
  const [temListaCarrinho, setTemListaCarrinho] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [idUsuario, setIdUsuario] = useState<number>(0);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, listaProduto, setListaProduto, listaCarrinho, setListaCarrinho, idUsuario, setIdUsuario, temListaCarrinho, setTemListaCarrinho }}>
      {children}
    </AuthContext.Provider>
  );
};
