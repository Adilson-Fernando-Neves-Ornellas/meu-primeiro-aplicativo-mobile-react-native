import { StyleSheet } from 'react-native';

const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  containerForm:{
    flex: 1,
    justifyContent: 'center',
    gap: 10
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
  },
  input: {
    // height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 8
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap:10
  }
});

export default LoginStyles;