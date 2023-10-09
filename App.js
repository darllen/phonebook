import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/login';
import CadastroScreen from './screens/cadastro';
import ListaContatosScreen from '/screens/listaContatos';
import CadastroContatoScreen from '/screens/cadastroContatoScreen';
import UploadScreen from '/screens/upload';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ListaContatos'>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ListaContatos" component={ListaContatosScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CadastroContato" component={CadastroContatoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Upload" component={UploadScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
