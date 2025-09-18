import { CustomLink } from '@/src/components/custom-link';
import Image from 'next/image';

export function BrandLogo() {
  return (
    <CustomLink href="/" aria-label="Shaykho Holdings Home">
      {/* Light theme logo - shown by default and in light mode */}
      <Image
        src="/assets/images/brand/logo-light2.png"
        alt="Shaykho Holdings Logo"
        width={200}
        height={50}
        className="block h-[50px] w-auto dark:hidden"
        priority
      />

      {/* Dark theme logo - shown only in dark mode */}
      <Image
        src="/assets/images/brand/logo-dark2.png"
        alt="Shaykho Holdings Logo"
        width={200}
        height={50}
        className="hidden h-[50px] w-auto dark:block"
        priority
      />
    </CustomLink>
  );
}
