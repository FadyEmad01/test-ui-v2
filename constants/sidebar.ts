export type NavigationItem = {
  name: string;
  href: string;
  isNew?: boolean;
  isUpdated?: boolean;
  isComingSoon?: boolean;
  isPaid?: boolean;
  goTo?: goToWhere[];
};

export type NavigationGroup = {
  name: string;
  children: NavigationItem[];
};
export type goToWhere = {
  prevHref?: string;
  prevName?: string;
  nextName?: string;
  nextHref?: string;
  iamIn: string;
};

export const NAVIGATION: NavigationGroup[] = [
  {
    name: 'Getting Started',
    children: [
      {
        name: 'Introduction',
        href: '/docs',
        goTo: [
          {
            // nextHref: '/docs/installation',
            nextName: 'Installation',
            iamIn: 'Introduction',
          }
        ]
      },
      {
        name: 'Installation',
        href: '/docs/installation',
        goTo: [
          {
            prevHref: '/docs',
            prevName: 'Introduction',
            nextHref: '/docs/accordion',
            nextName: 'Accordion',
            iamIn: 'Installation',
          }
        ]
      },
    ],
  },
  {
    name: 'Core Components',
    children: [
      {
        name: 'Accordion',
        href: '/docs/accordion',
        goTo: [
          {
            prevHref: '/docs/installation',
            prevName: 'Installation',
            nextHref: '/docs/squircle',
            nextName: 'Squircle',
            iamIn: 'Accordion',
          }
        ]
      },
    ],
  },
  {
    name: 'Advanced Components',
    children: [
      {
        name: 'Squircle',
        href: '/docs/squircle',
        isNew: true,
        goTo: [
          {
            prevHref: '/docs/accordion',
            prevName: 'Accordion',
            iamIn: 'Squircle',
            nextHref: '/docs/drawSVGscribbles',
            nextName: 'DrawSVG Scribbles',
          }
        ]
      },
      {
        name: 'DrawSVG Scribbles',
        href: '/docs/drawSVGscribbles',
        isNew: true,
        goTo: [
          {
            prevHref: '/docs/squircle',
            prevName: 'Squircle',
            iamIn: 'Squircle',
          }
        ]
      },

    ],
  },
  {
    name: 'Designed Components',
    children: [
      {
        name: 'Neumorphism Button',
        href: '/docs/neumorphism-button',
        isNew: true,
        goTo: [
          {
            prevHref: '/docs/squircle',
            prevName: 'Squircle',
            iamIn: 'Neumorphism Button',
          }
        ]
      },

    ],
  },
];
