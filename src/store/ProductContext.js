import React, { createContext, useReducer } from 'react';

// actions
const onFetchProducts = (dispatch) => async () => {
  const response = {
    data: [
      {
        name: 'Macbook Pro 15 inch',
        type: 'Computer',
        price: '$2500',
      },
      {
        name: 'Macbook Pro 13 inch',
        type: 'Computer',
        price: '$1800',
      },
      {
        name: 'iPhone',
        type: 'Phone',
        price: '$1200',
      },
      {
        name: 'Google Nexus',
        type: 'Phone',
        price: '$800',
      },
    ],
  };
  dispatch({
    type: 'FETCH_PRODUCTS',
    payload: response.data,
  });
};

//reducers to handle dispatched actions and Change State
const productReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

//Map actions , State and reducers with Context
const CreateProductContext = (reducer, actions, initialState) => {
  const ProductsContext = createContext();

  const ProductsProvider = ({ children }) => {
    const [productState, dispatch] = useReducer(reducer, initialState);

    const boundActions = {};

    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <ProductsContext.Provider value={{ productState, ...boundActions }}>
        {children}
      </ProductsContext.Provider>
    );
  };

  return { ProductsContext, ProductsProvider };
};

//Export Context for Consumer
export const { ProductsProvider, ProductsContext } = CreateProductContext(
  productReducer,
  {
    onFetchProducts,
  },
  {
    products: undefined,
  }
);
