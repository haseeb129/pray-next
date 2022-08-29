const baseUrl = 'https://dev.wepray.com.br';

export const urls = {
  getCustomers: (queryParams: string) => `${baseUrl}/customers/${queryParams}`,
  addCustomer: () => `${baseUrl}/customers`,
  editCustomer: (id: string) => `${baseUrl}/customers/${id}`,
  deleteCustomer: (id: string) => `${baseUrl}/customers/${id}`,
};
