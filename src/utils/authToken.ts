import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {
  accessToken?: string;
  refreshToken?: string;
};

export const setAuthToken = ({accessToken, refreshToken}: Props) => {
  const storeData = async () => {
    try {
      if (accessToken) {
        await AsyncStorage?.setItem('accessToken', accessToken);
      }
      if (refreshToken) {
        await AsyncStorage?.setItem('refreshToken', refreshToken);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return storeData();
};

// type GetAuthTokenProps = {
//   accessToken?: string | null;
//   refreshToken?: string | null;
// };

export const getAuthToken = () => {
  let accessToken: string = '';
  let refreshToken: string = '';

  const getData = async () => {
    try {
      let accessTokenRes = await AsyncStorage?.getItem('accessToken');
      let refreshTokenRes = await AsyncStorage?.getItem('refreshToken');
      if (accessTokenRes !== null) {
        return (accessToken = accessTokenRes);
      }
      if (refreshTokenRes !== null) {
        return (refreshToken = refreshTokenRes);
      }
    } catch (error) {
      console.log(error);
    }
  };

  getData();

  return {accessToken, refreshToken};
};

export const removeAuthToken = async () => {
  if (typeof window !== 'undefined') {
    await AsyncStorage?.removeItem('accessToken');
    await AsyncStorage?.removeItem('refreshToken');
  }
};
