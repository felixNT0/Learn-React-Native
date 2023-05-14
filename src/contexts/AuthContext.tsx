import React, {createContext, useContext, useState} from 'react';
import {useQuery} from 'react-query';
import http from '../api/http';
import {getAuthToken, removeAuthToken} from '../utils/authToken';

export type UserType = {
  token: string;
  id: string;
  created_at: string;
  first_name: string;
  last_name: string;
  email_address: string;
  username: string;
  phone_number: string;
  date_of_birth: string;
};

const QUERY_KEYS_USER_PROFILE_CONTEXT = 'QUERY_KEYS_USER_PROFILE_CONTEXT';
export const fetchUserProfile = (): Promise<UserType> => http.get('/sessions');

export interface UserContextType extends UserType {
  isLoggedIn?: boolean | null;
}

export const defaultUser: UserContextType = {
  token: '',
  id: '',
  created_at: '',
  first_name: '',
  last_name: '',
  email_address: '',
  username: '',
  phone_number: '',
  date_of_birth: '',
  isLoggedIn: null,
};

type UserContext = {
  currentUser: UserContextType;
  logout: () => void;
  updateCurrentUser: () => void;
  isLoading: boolean;
};

const UserContext = createContext<UserContext>({
  currentUser: defaultUser,
  updateCurrentUser: () => {},
  logout: () => {},
  isLoading: false,
});

export default function AppProvider({children}: any) {
  const [currentUser, setCurrentUser] = useState<UserContextType>(defaultUser);

  const {accessToken} = getAuthToken();

  const {refetch, isLoading} = useQuery(
    [QUERY_KEYS_USER_PROFILE_CONTEXT, accessToken],
    fetchUserProfile,
    {
      enabled: !!accessToken,
      onSuccess: (res: any) => {
        console.log(res);
        setCurrentUser(defaultUser);
        // setCurrentUser(prev => ({...prev, isLoggedIn: true}));
      },
      onError: (res: any) => {
        console.log(res);
        // setCurrentUser(prev => ({...prev, isLoggedIn: false}));
        // logout();
      },
    },
  );

  const logout = () => {
    removeAuthToken();
  };

  return (
    <UserContext.Provider
      value={{currentUser, logout, updateCurrentUser: refetch, isLoading}}>
      {children}
    </UserContext.Provider>
  );
}

export const useAppContext = (): UserContext => {
  const {isLoading, logout, updateCurrentUser, currentUser} =
    useContext(UserContext);
  return {isLoading, logout, updateCurrentUser, currentUser};
};
