import React from 'react';

import axiosClient from 'api/axiosClient';
import AuthAPI from 'api/AuthAPI';

const AUTH_KEY = 'authToken';

const AuthStateContext = React.createContext();
const AuthFunctionsContext = React.createContext();

const initialAuthState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
  user: null,
};

function authReducer(prevState, action) {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        ...prevState,
        isSignout: false,
        isLoading: false,
        userToken: action.token,
        user: action.payload.user,
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        isSignout: true,
        isLoading: false,
        userToken: null,
        user: null,
      };
  }
}

function setAuthHeader(token) {
  if (!token) {
    return;
  }
  axiosClient.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

function removeAuthHeader() {
  delete axiosClient.defaults.headers.common['Authorization'];
}

function AuthProvider({ children }) {
  const [state, dispatch] = React.useReducer(authReducer, initialAuthState);

  const authSuccess = (idToken, user) => {
    dispatch({
      type: 'SIGN_IN',
      token: idToken,
      payload: {
        user,
      },
    });
    try {
      localStorage.setItem(AUTH_KEY, idToken);
    } catch (err) {}
  };

  const authFailure = () => {
    localStorage.removeItem(AUTH_KEY);
    removeAuthHeader();
    dispatch({ type: 'SIGN_OUT' });
  };

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const init = async () => {
      const idToken = await localStorage.getItem(AUTH_KEY);
      setAuthHeader(idToken);
      console.log('idToken', idToken);
      try {
        if (idToken) {
          const res = await AuthAPI.loginIdToken(idToken);
          authSuccess(idToken, res.user);
        } else {
          authFailure();
        }
      } catch (err) {
        authFailure();
      }
    };
    init();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        const { email, password } = data;
        const res = await AuthAPI.login(email, password);
        const idToken = res.jwt;
        setAuthHeader(idToken);
        const resInfo = await AuthAPI.loginIdToken(idToken);
        return authSuccess(idToken, resInfo.user);
      },
      signOut: () => {
        authFailure();
      },
    }),
    []
  );

  return (
    <AuthStateContext.Provider value={state}>
      <AuthFunctionsContext.Provider value={authContext}>
        {children}
      </AuthFunctionsContext.Provider>
    </AuthStateContext.Provider>
  );
}

function useAuthState() {
  const context = React.useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider');
  }
  return context;
}

function useAuthFunctions() {
  const context = React.useContext(AuthFunctionsContext);
  if (context === undefined) {
    throw new Error('useAuthFunctions must be used within a AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuthState, useAuthFunctions };
