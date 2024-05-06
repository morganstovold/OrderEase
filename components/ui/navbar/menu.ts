type MenuItem = {
  title: string;
  url: string;
};

const menu: MenuItem[] = [
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'About',
    url: '#about'
  },
  {
    title: 'Services',
    url: '#services'
  },
  {
    title: 'Contact',
    url: 'contact'
  }
];

export { menu };
