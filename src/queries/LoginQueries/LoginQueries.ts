import {AxiosResponse} from 'axios';
import http from '../../api/http';

export type TUserLoginData = {
  email_address: string;
  password: string;
};

export type TLoginResponse = AxiosResponse<{
  id: string;
  email_address: string;
  first_name: string;
  last_name: string;
  username: string;
  total_balance: number;
  total_returns: number;
  token: string;
}>;

export const loginUser = (data: TUserLoginData): Promise<TLoginResponse> => {
  return http.post('/sessions', data, {hasAuth: false});
};
