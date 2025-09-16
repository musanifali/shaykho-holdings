import { CustomLink } from '@/src/components/custom-link';
import Image from 'next/image';

export function BrandLogo() {
  return (
    <CustomLink href="/" aria-label="Shaykho Holdings Home">
      {/* Light theme logo - shown by default and in light mode */}
      <Image
        src="/assets/images/brand/logo-light2.png"
        alt="Shaykho Holdings Logo"
        width={300}
        height={80}
        className="block h-[80px] w-auto dark:hidden"
        priority
      />

      {/* Dark theme logo - shown only in dark mode */}
      <Image
        src="/assets/images/brand/logo-dark2.png"
        alt="Shaykho Holdings Logo"
        width={300}
        height={80}
        className="hidden h-[80px] w-auto dark:block"
        priority
      />
    </CustomLink>
  );
}
