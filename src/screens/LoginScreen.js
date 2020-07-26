import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { UserContext } from '../store/UserContext';
import { ProductsContext } from '../store/ProductContext';

const LoginScreen = () => {
  const { productState, onFetchProducts } = useContext(ProductsContext);
  const { userState, onUserLogin } = useContext(UserContext);

  const { products } = productState;
  const { user } = userState;

  console.log(products);

  return (
    <View style={styles.container}>
      {user !== undefined && <Text> User Context Output: {user.name}</Text>}
      <TouchableOpacity
        style={{
          height: 50,
          width: 220,
          marginTop: 10,
          marginBottom: 10,
          backgroundColor: '#FF5733',
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={onUserLogin}
      >
        <Text style={{ color: '#FFF', fontSize: 18 }}> User Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 50,
          width: 220,
          marginTop: 10,
          marginBottom: 10,
          backgroundColor: '#FF5733',
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={onFetchProducts}
      >
        <Text style={{ color: '#FFF', fontSize: 18 }}> Fetch Products</Text>
      </TouchableOpacity>
      {products !== undefined && (
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          Products Context Output: {JSON.stringify(products)}
        </Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  products: { backgroundColor: 'red', height: 200, width: 200 },
});
export { LoginScreen };
