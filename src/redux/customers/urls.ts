const baseUrl = `https://jsonplaceholder.typicode.com`;

export const urls = {
  getCustomers: (queryParams: string) => `${baseUrl}/${queryParams}`,
};
