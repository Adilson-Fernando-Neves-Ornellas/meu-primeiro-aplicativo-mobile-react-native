
import Routes from './routes/Routes';
import { AuthProvider } from './Contexto/Context';

export default function App() {
  return (
    <AuthProvider>
      <Routes/>
    </AuthProvider>
  );
}

