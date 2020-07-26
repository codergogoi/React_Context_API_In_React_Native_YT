import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { LoginScreen } from './src/screens/LoginScreen';
import { UserProvider } from './src/store/UserContext';
import { ProductsProvider } from './src/store/ProductContext';

export default function App() {
  return (
    <ProductsProvider>
      <UserProvider>
        <LoginScreen />
      </UserProvider>
    </ProductsProvider>
  );
}
