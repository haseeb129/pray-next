const baseUrl = `/backend`;

export const urls = {
  getCustomers: (queryParams: string) =>
    `${baseUrl}/appointments/listing?${queryParams}`,
};
