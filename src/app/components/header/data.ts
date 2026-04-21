export const menuData = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Landing',
    mega: true,
    children: [
      {
        label: 'App',
        icon: 'solar:smartphone-2-bold-duotone',
        link: '/home/app',
        color: 'text-blue-600',
        bg: 'bg-blue-600/10',
      },
      {
        label: 'Saas Modern',
        icon: 'solar:laptop-minimalistic-bold-duotone',
        link: '/home/saas',
        color: 'text-green-500',
        bg: 'bg-green-500/20',
      },
      {
        label: 'Saas Classic',
        icon: 'solar:monitor-bold-duotone',
        link: '/home/saas2',
        color: 'text-primary',
        bg: 'bg-primary/10',
      },
      {
        label: 'Startup',
        icon: 'solar:pulse-bold-duotone',
        link: '/home/startup',
        color: 'text-orange-600',
        bg: 'bg-orange-600/10',
      },
      {
        label: 'Software',
        icon: 'solar:layers-bold-duotone',
        link: '/home/software',
        color: 'text-amber-400',
        bg: 'bg-amber-400/10',
      },
      {
        label: 'Agency',
        icon: 'solar:bolt-circle-bold-duotone',
        link: '/home/agency',
        color: 'text-black',
        bg: 'bg-black/10',
      },
      {
        label: 'Coworking',
        icon: 'solar:home-wifi-bold-duotone',
        link: '/home/coworking',
        color: 'text-primary',
        bg: 'bg-primary/10',
      },
      {
        label: 'Crypto',
        icon: 'solar:dollar-minimalistic-bold-duotone',
        link: '/home/crypto',
        color: 'text-orange-600',
        bg: 'bg-orange-600/10',
      },
      {
        label: 'Marketing',
        icon: 'solar:letter-opened-bold-duotone',
        link: '/home/marketing',
        color: 'text-blue-500',
        bg: 'bg-blue-500/10',
      },
      {
        label: 'Portfolio',
        icon: 'solar:wallpaper-bold-duotone',
        link: '/home/portfolio',
        color: 'text-red-500',
        bg: 'bg-red-500/10',
      },
    ],
  },
  {
    label: 'Pages',
    children: [
      {
        label: 'Account',
        children: [
          { label: 'Dashboard', link: '/account/dashboard' },
          { label: 'Settings', link: '/account/settings' },
          { label: 'Login', link: '/account/login' },
          { label: 'Sign Up', link: '/account/signup' },
          { label: 'Forget Password', link: '/account/forget-password' },
          { label: 'Confirm Account', link: '/account/confirm' },
        ],
      },
      {
        label: 'Blog',
        children: [
          { label: 'Blog', link: '/blog' },
          { label: 'Blog Post', link: '/blog/post' },
        ],
      },
      { divider: true },
      { label: 'Company', link: '/company' },
      { label: 'Career', link: '/career' },
      { label: 'Pricing', link: '/pricing' },
      {
        label: 'Portfolio',
        children: [
          { label: 'Portfolio Grid', link: '/portfolio/grid' },
          { label: 'Portfolio Masonry', link: '/portfolio/masonry' },
          { label: 'Portfolio Item', link: '/portfolio/item' },
        ],
      },
      { divider: true },
      { label: 'Help', link: '/help' },
    ],
  },
  {
    label: 'Contact us',
    link: '/contact',
  },
];
