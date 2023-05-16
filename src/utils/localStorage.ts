import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log('Error storing value: ', error);
  }
};

const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    } else {
      console.log('Value is null.');
      return null;
    }
  } catch (error) {
    console.log('Error retrieving value: ', error);
    return null;
  }
};

const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log('Error removing value: ', error);
  }
};

async function getAuthToken() {
  const accessToken = await getData('accessToken');
  return accessToken;
}

function setAuthToken(accessToken: string) {
  storeData('accessToken', accessToken);
}

const removeAuthToken = () => removeData('accessToken');

export {
  storeData,
  getData,
  removeData,
  getAuthToken,
  setAuthToken,
  removeAuthToken,
};
