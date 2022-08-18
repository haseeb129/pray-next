import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const menuNames = {
  customers: 'Customers',
  users: 'Users',
  churchs: 'Churchs',
  ministers: 'Ministers',
};

// export const panelSideBar = [...Object.values(menuNames)];

export const panelSideBar: { text: string; Icon: any; path: string }[] = [
  {
    text: menuNames.customers,
    Icon: () => <PeopleAltIcon />,
    path: '/admin/customers',
  },
  {
    text: menuNames.users,
    Icon: () => <PeopleAltIcon />,
    path: '/admin/users',
  },
  {
    text: menuNames.churchs,
    Icon: () => <PeopleAltIcon />,
    path: '/admin/churchs',
  },
  {
    text: menuNames.ministers,
    Icon: () => <PeopleAltIcon />,
    path: '/admin/ministers',
  },
];
