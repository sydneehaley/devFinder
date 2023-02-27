import axios, { AxiosInstance } from 'axios';
import { getAuthorizationHeader } from '../../../utils/getAuthorizationHeader';

export class AuthService {
  protected readonly instance: AxiosInstance;
  public constructor(url: string) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 30000,
      timeoutErrorMessage: 'Time out!',
    });
  }

  //logs user in

  login = (identifier: string, password: string) => {
    return this.instance
      .post('/api/auth/local', {
        identifier,
        password,
      })
      .then((res) => {
        return {
          jwt: res.data.jwt,
          user: {
            blocked: res.data.user.blocked,
            confirmed: res.data.user.confirmed,
            createdAt: res.data.user.createdAt,
            email: res.data.user.email,
            id: res.data.user.number,
            provider: res.data.user.provider,
            updatedAt: res.data.user.updatedAt,
            username: res.data.user.username,
          },
        };
      });
  };

  //returns user's content

  // getMe = (userId: string) => {
  //   return this.instance
  //     .get(`/users/${userId}`, {
  //       headers: getAuthorizationHeader(),
  //     })
  //     .then((res) => {
  //       return res.data;
  //     });
  // };
}
