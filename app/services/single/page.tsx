import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { HeroSection } from '@/src/sections/hero/v3';
import { ServiceDetailsSection } from '@/src/sections/service-details/v1';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shaykho Holdings | Service details',
  description: 'Shaykho Holdings - IT Solutions and Services',
};

export default function Page() {
  return (
    <>
      <MainHeader version="2" />
      <HeroSection
        title="Service Details"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Service Details',
          },
        ]}
      />
      <ServiceDetailsSection />
      <Footer />
    </>
  );
}
