import axios from 'axios';

export interface ReduxInterface {
  method: string;
  url: string;
  headers?: any;
  data?: object;
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
  SEARCH: 'search',
  EMAIL: 'email',
};

export const isValidStatus = (status: number) => {
  const validStatuses = [200, 201, 202, 203, 204];
  if (validStatuses.includes(status)) return true;
  return false;
};

export interface CommonTableProps {
  data: any;
  loading: boolean;
  pagination: any;
  onTableChange: any;
  columns: any[];
  InterfaceName?: string;
  ExpandableComponent?: React.ElementType;
  onEdit: any;
}

export const modalNames = {
  ADD_CUSTOMER: 'ADD_CUSTOMER',
  DELETE_CONFIRMATION: 'DELETE_CONFIRMATION',
};
