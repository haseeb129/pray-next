import { deleteCookie, setCookie } from 'cookies-next';
import Router from 'next/router';
import nextCookie from 'next-cookies';
import { Cookies } from 'react-cookie';

// set up cookies
const cookies = new Cookies();

export const handleAuthSSR = async (ctx) => {
  const { token } = nextCookie(ctx);

  const redirectOnError = () => {
    if (typeof window !== 'undefined') {
      Router.push('/auth/signIn/');
    } else {
      ctx.res.writeHead(302, { Location: '/auth/signIn/' });
      ctx.res.end();
    }
  };

  try {
    if (!token) {
      return redirectOnError();
    }
  } catch (error) {
    /* eslint-disable no-console */
    console.log('Error: ', error);
    // Implementation or Network error
    return redirectOnError();
  }
  return {};
};

export const login = async ({ token }) => {
  cookies.set('token', token, { maxAge: 60 * 60 * 24 });
  setCookie('token', token, { maxAge: 60 * 60 * 24 });
};

export const logout = () => {
  cookies.remove('token');
  deleteCookie('token');
};
