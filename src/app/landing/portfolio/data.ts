export type ServiceType = {
  icon: string;
  title: string;
  description: string;
  aosDuration: string;
};

export const serviceCardData: ServiceType[] = [
  {
    icon: 'solar:filters-bold-duotone',
    title: 'UI/UX Design',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
    aosDuration: '600',
  },
  {
    icon: 'solar:layers-bold-duotone',
    title: 'Product Design',
    description:
      'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary making.',
    aosDuration: '900',
  },
  {
    icon: 'solar:wallpaper-bold',
    title: 'Frontend Development',
    description:
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
    aosDuration: '1200',
  },
];

export type ProjectType = {
  aosDuration: string;
  items: {
    title: string;
    category: string;
    image: string;
  }[];
};

export const projectCardData: ProjectType[] = [
  {
    aosDuration: '600',
    items: [
      {
        title: 'Project',
        category: 'Branding, Interaction, Web Design',
        image: 'assets/images/features/agency1.jpg',
      },
      {
        title: 'Project 2',
        category: 'Branding, Web Design & Development',
        image: 'assets/images/features/agency2.jpg',
      },
    ],
  },
  {
    aosDuration: '600',
    items: [
      {
        title: 'Project 3',
        category: 'Branding, Interaction, Web Design',
        image: 'assets/images/features/agency2.jpg',
      },
      {
        title: 'Project 4',
        category: 'Branding, Web Design & Development',
        image: 'assets/images/features/agency1.jpg',
      },
    ],
  },
];
