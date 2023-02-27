import { authService } from '../../services/strapi/auth';
import Cookies from 'js-cookie';
import { User } from '../../types/User';

export const useLogin = () => {
  const login = async (identifier: string, password: string) => {
    // fetching user
    const user = await authService.login(identifier, password);
    //if user is authenticated, set cookie
    if (user) {
      Cookies.set('currentUser', JSON.stringify(user));
    }
    return user as User;
  };
  return { login };
};
