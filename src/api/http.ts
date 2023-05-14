import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
// import createAuthRefreshInterceptor from "axios-auth-refresh";
import { getAuthToken } from "../utils/authToken";

type GetOptionType = {
  hasAuth: boolean;
  "Content-Type"?: string;
};
export type TErrorResponse = {
  message: string;
  success: boolean;
};

const API_URL = "https://rise-rn-test-api-gb2v6.ondigitalocean.app/api/v1/";

class Http {
  axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: API_URL,
    });

    // this.refreshTokenAuth = this.refreshTokenAuth.bind(this);
    // createAuthRefreshInterceptor(this.axios, this.refreshTokenAuth);
  }

  //   async refreshTokenAuth(failedRequest: any) {
  //     return await new Promise((resolve, reject) => {
  //       axios
  //         .post(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}users/refresh-token`, {
  //           refreshToken: getAuthToken().refreshToken,
  //         })
  //         .then((tokenRefreshResponse) => {
  //           const newAccessToken = tokenRefreshResponse.data.result;
  //           setAuthToken({ accessToken: newAccessToken });
  //           failedRequest.response.config.headers[
  //             "Authorization"
  //           ] = `Bearer ${newAccessToken}`;
  //           return resolve(newAccessToken);
  //         })
  //         .catch((err) => {
  //           reject(err);
  //         });
  //     });
  //   }

  async get(url: string, config?: AxiosRequestConfig) {
    try {
      const response = await this.axios.get(url, {
        headers: { ...(await this.getTokenHeader()), ...config?.headers },
      });
      return response.data;
    } catch (error: any) {
      throw error;
    }
  }

  async post(
    url: string,
    data: {} = {},
    options: GetOptionType = { hasAuth: true }
  ): Promise<AxiosResponse<any>> {
    let headerParams: { Authorization?: string; "Content-Type"?: string } = {};
    if (options.hasAuth) {
      headerParams = await this.getTokenHeader();
    }
    if (options["Content-Type"]) {
      headerParams["Content-Type"] = options["Content-Type"];
    }
    try {
      return await this.axios.post(url, data, {
        headers: headerParams,
      });
    } catch (error: any) {
      if (error.response) {
        throw error.response.data;
      } else {
        throw new Error(error.toString());
      }
    }
  }

  async patch(url: string, data: {} = {}): Promise<AxiosResponse> {
    try {
      return await this.axios.patch(url, data, {
        headers: await this.getTokenHeader(),
      });
    } catch (error: any) {
      if (error.response) {
        throw error.response.data;
      } else {
        throw new Error(error.toString());
      }
    }
  }

  async put(
    url: string,
    data: {} = {},
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    try {
      return await this.axios.put(url, data, {
        headers: { ...(await this.getTokenHeader()), ...config?.headers },
      });
    } catch (error: any) {
      if (error.response) {
        throw error.response.data;
      } else {
        throw new Error(error.toString());
      }
    }
  }

  async delete(url: string, config?: any) {
    const response = await this.axios.delete(url, {
      headers: {
        ...(await this.getTokenHeader()),
        ...config,
      },
    });
    return response.data;
  }

  protected async getTokenHeader(): Promise<{ Authorization: string }> {
    return new Promise((resolve) => {
      resolve({ Authorization: `Bearer ${getAuthToken()?.accessToken || ""}` });
    });
  }
}

const http = new Http();

export default http;
