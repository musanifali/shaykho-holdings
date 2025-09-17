import { HeaderProps } from '@/src/layout/header/desktop/v1';

export const menuItemsProps: HeaderProps['menuItems'] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Team',
    href: '/team',
  },
  {
    label: 'Services',
    href: '/services',
    // Dropdown commented out - using direct link instead
    // subMenuItems: [
    //   {
    //     label: 'Service List',
    //     href: '/services',
    //   },
    //   {
    //     label: 'Service single',
    //     href: '/services/single',
    //   },
    // ],
  },
  {
    label: 'Projects',
    href: '/project',
    // Dropdown commented out - using direct link instead
    // subMenuItems: [
    //   {
    //     label: 'Project List',
    //     href: '/project',
    //   },
    //   {
    //     label: 'Project single',
    //     href: '/project/single',
    //   },
    // ],
  },
  {
    label: 'Blog',
    href: '/blog',
    // Dropdown commented out - using direct link instead
    // subMenuItems: [
    //   {
    //     label: 'Blog List',
    //     href: '/blog',
    //   },
    //   {
    //     label: 'Blog single',
    //     href: '/blog/single',
    //   },
    // ],
  },
  // Pages dropdown commented out
  // {
  //   title: 'Pages',
  //   subMenuItems: [
  //     {
  //       label: 'Testimonial',
  //       href: '/testimonial',
  //     },
  //     {
  //       label: 'Team',
  //       href: '/team',
  //     },
  //     {
  //       label: 'Pricing',
  //       href: '/pricing',
  //     },
  //     {
  //       label: 'FAQ',
  //       href: '/faq',
  //     },
  //   ],
  // },
  {
    label: 'Contact',
    href: '/contact',
  },
];
