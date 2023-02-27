import { AuthService } from './auth.service';

export const authService = new AuthService(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}`);
