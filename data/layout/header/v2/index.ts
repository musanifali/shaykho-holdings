import { HeaderProps } from '@/src/layout/header/desktop/v2';
import { menuItemsProps } from '../menu';

export const headerData: HeaderProps = {
  contactInfo: {
    phone: '',
    mail: 'info@shaykho.com',
    addresses: [
      'Model Town Extension, Lahore, Punjab, Pakistan',
      'Sector I-11, Islamabad, Pakistan',
    ],
  },
  ctaBtn: {
    href: '/contact',
    label: 'Contact',
    openNewTab: false,
  },
  menuItems: menuItemsProps,
};
