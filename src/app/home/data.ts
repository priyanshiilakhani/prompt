const app = 'assets/images/demo/home-app.jpg';
const portfoilo = 'assets/images/demo/home-portfolio.jpg';
const saas = 'assets/images/demo/home-saas.jpg';
const market = 'assets/images/demo/home-marketing.jpg';
const saas2 = 'assets/images/demo/home-saas2.jpg';

export type ImageType = {
  image: string;
  alt: string;
};

export const imageData: ImageType[] = [
  {
    image: app,
    alt: 'saas1',
  },
  {
    image: portfoilo,
    alt: 'saas3',
  },
  {
    image: saas,
    alt: 'saas2',
  },
  {
    image: market,
    alt: 'saas3',
  },
  {
    image: saas2,
    alt: 'saas3',
  },
];
