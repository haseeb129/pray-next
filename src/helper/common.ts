import axios from 'axios';

export interface ReduxInterface {
  method: string;
  url: string;
  headers?: any;
}
export async function newRequest({
  method,
  url,
  data,
  headers,
  auth,
  responseType,
}: any) {
  // --- Need to fix it, it is causing issue due to 127.0.0.1 use instead of localhost in keycloak url
  // const isUserLoggedIn = await isLoggedIn();
  // if (!isUserLoggedIn) {
  //   location.reload();
  //   return;
  // }
  // headers = { ...headers, ...getLoggedInUserHeaders() };
  const response = await axios({
    method,
    url,
    headers,
    data,
    auth,
    responseType,
  }).catch((error) => {
    return { error };
  });
  return response;
}

export const inputTypes = {
  TEXT: 'text',
  PHONE: 'phone',
  PASSWORD: 'password',
};
