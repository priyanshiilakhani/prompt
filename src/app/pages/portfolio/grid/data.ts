const IMG_1 = 'assets/images/photos/1.jpg';
const IMG_3 = 'assets/images/photos/3.jpg';
const IMG_4 = 'assets/images/photos/4.jpg';
const IMG_5 = 'assets/images/photos/5.jpg';
const IMG_6 = 'assets/images/photos/6.jpg';
const IMG_7 = 'assets/images/photos/7.jpg';

export type PortfolioType ={
  id: number;
  title: string;
  description: string;
  image: string;
  groups: string[];
}

export const portfolioData: PortfolioType[] = [
  {
    id: 1,
    title: "Smart Desk v2.0",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    image: IMG_1,
    groups: ["web-design"]
  },
  {
    id: 2,
    title: "Task Manager",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    image: IMG_7,
    groups: ["graphic-design"]
  },
  {
    id: 3,
    title: "Portfolio Manager",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    image: IMG_3,
    groups: ["photography", "web-design"]
  },
  {
    id: 4,
    title: "Smart Office v2.0",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    image: IMG_4,
    groups: ["illustrator"]
  },
  {
    id: 5,
    title: "Online Conference",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    image: IMG_5,
    groups: ["photography", "web-design"]
  },
  {
    id: 6,
    title: "Virtual Receptionist",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    image: IMG_6,
    groups: ["graphic-design"]
  }
];