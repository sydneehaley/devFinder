import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { User } from '../../types/User';
import jwt from 'jsonwebtoken';

export const useCurrentUser = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    function isTokenExpired(token: any): boolean {
      try {
        const decodedToken = jwt.decode(token) as { exp: number };
        const currentTime = Date.now() / 1000;
        return decodedToken.exp < currentTime;
      } catch (err) {
        // Invalid token
        return true;
      }
    }

    const expired = isTokenExpired(Cookies.get('jwt'));

    const currentUser = Cookies.get('currentUser');
    if (currentUser && !expired) {
      setUser(JSON.parse(currentUser));
    }
  }, []);

  return { user };
};
