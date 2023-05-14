import {AxiosResponse} from 'axios';
import http from '../../api/http';

export type TUserLoginData = {
  email?: string;
  username?: string;
  password: string;
};

export type TLoginResponse = AxiosResponse<{
  accessToken: string;
}>;

export const createPlan = (data: TUserLoginData): Promise<TLoginResponse> => {
  return http.post('/sessions', data);
};
