import React, { createContext, useReducer } from 'react';

// actions

const onUserLogin = (dispatch) => async () => {
  // we will perform some Web request here
  const response = {
    data: {
      name: 'Jayanta Gogoi',
      address: 'Mumbai, India',
      token: '3456875sdgfjshdg34623',
    },
  };
  dispatch({
    type: 'DID_LOGIN',
    payload: response.data,
  });
};

// reducers to handle Dispatched Actions
const userReducer = (state, action) => {
  switch (action.type) {
    case 'DID_LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

// Map Actions, State and Reducer for Consumer Components
const CreateUserContext = (reducer, actions, initialState) => {
  const UserContext = createContext();

  const UserProvider = ({ children }) => {
    const [userState, dispatch] = useReducer(reducer, initialState);

    const boundActions = {};

    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <UserContext.Provider value={{ userState, ...boundActions }}>
        {children}
      </UserContext.Provider>
    );
  };

  return { UserContext, UserProvider };
};

export const { UserProvider, UserContext } = CreateUserContext(
  userReducer,
  {
    onUserLogin,
  },
  {
    user: undefined,
  }
);
