type NavLink = {
  label: string;
  route: string;
};

type NavDivider = {
  divider: true;
};

type NavDropdown = {
  label: string;
  children: NavChild[];
};

type NavMegaItem = {
  label: string;
  route: string;
  icon: string;
  color: string;
  textColor: string;
};

type NavChild = NavLink | NavDivider | NavDropdown;

export const NAVBAR_DATA: {
  type: string;
  label: string;
  route?: string;
  mega?: boolean;
  children?: NavMegaItem[] | NavChild[];
}[] = [
  {
    type: 'link',
    label: 'Home',
    route: '/',
  },
  {
    type: 'dropdown',
    label: 'Landing',
    mega: true,
    children: [
      {
        label: 'App',
        route: '/home/app',
        icon: 'solar:smartphone-2-bold-duotone',
        color: 'blue-600/10',
        textColor: 'text-blue-600',
      },
      {
        label: 'Saas Modern',
        route: '/home/saas',
        icon: 'solar:laptop-minimalistic-bold-duotone',
        color: 'green-500/20',
        textColor: 'text-green-500',
      },
      {
        label: 'Saas Classic',
        route: '/home/saas2',
        icon: 'solar:monitor-bold-duotone',
        color: 'primary/10',
        textColor: 'text-primary',
      },
      {
        label: 'Startup',
        route: '/home/startup',
        icon: 'solar:pulse-bold-duotone',
        color: 'orange-600/10',
        textColor: 'text-orange-600',
      },
      {
        label: 'Software',
        route: '/home/software',
        icon: 'solar:layers-bold-duotone',
        color: 'amber-400/10',
        textColor: 'text-amber-400',
      },
      {
        label: 'Agency',
        route: '/home/agency',
        icon: 'solar:bolt-circle-bold-duotone',
        color: 'black/10',
        textColor: 'text-black',
      },
      {
        label: 'Coworking',
        route: '/home/coworking',
        icon: 'solar:home-wifi-bold-duotone',
        color: 'primary/10',
        textColor: 'text-primary',
      },
      {
        label: 'Crypto',
        route: '/home/crypto',
        icon: 'solar:dollar-minimalistic-bold-duotone',
        color: 'orange-600/10',
        textColor: 'text-orange-600',
      },
      {
        label: 'Marketing',
        route: '/home/marketing',
        icon: 'solar:letter-opened-bold-duotone',
        color: 'blue-500/10',
        textColor: 'text-blue-500',
      },
      {
        label: 'Portfolio',
        route: '/home/portfolio',
        icon: 'solar:wallpaper-bold-duotone',
        color: 'red-500/10',
        textColor: 'text-red-500',
      },
    ],
  },
  {
    type: 'dropdown',
    label: 'Pages',
    children: [
      {
        label: 'Account',
        children: [
          { label: 'Dashboard', route: '/account/dashboard' },
          { label: 'Settings', route: '/account/settings' },
          { label: 'Login', route: '/account/login' },
          { label: 'Sign Up', route: '/account/signup' },
          { label: 'Forget Password', route: '/account/forget-password' },
          { label: 'Confirm Account', route: '/account/confirm' },
        ],
      },
      {
        label: 'Blog',
        children: [
          { label: 'Blog', route: '/blog' },
          { label: 'Blog Post', route: '/blog/post' },
        ],
      },
      { divider: true },
      { label: 'Company', route: '/company' },
      { label: 'Career', route: '/career' },
      { label: 'Pricing', route: '/pricing' },
      {
        label: 'Portfolio',
        children: [
          { label: 'Portfolio Grid', route: '/portfolio/grid' },
          { label: 'Portfolio Masonry', route: '/portfolio/masonry' },
          { label: 'Portfolio Item', route: '/portfolio/item' },
        ],
      },
      { divider: true },
      { label: 'Help', route: '/help' },
    ],
  },
  {
    type: 'link',
    label: 'Contact us',
    route: '/contact',
  },
];
