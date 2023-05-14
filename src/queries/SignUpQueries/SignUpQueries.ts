import {AxiosResponse} from 'axios';
import http from '../../api/http';

export type TUserSignUpData = {
  first_name: string;
  last_name: string;
  email_address: string;
  password: string;
  date_of_birth: string;
  phone_number: string;
  username: string;
};

export type TSignupResponse = AxiosResponse<{
  token: string;
  id: string;
  created_at: string;
  first_name: string;
  last_name: string;
  email_address: string;
  username: string;
  phone_number: string;
  date_of_birth: string;
}>;

export const signUpUser = (data: TUserSignUpData): Promise<TSignupResponse> => {
  return http.post('/users', data, {
    hasAuth: false,
  });
};
