'use client';

import { useRouter } from 'next/navigation';
import Popup from '@/components/Popup';
import PopupContent from '@/components/PopupContent';
import { useEffect, useState, ComponentType } from 'react';
import { PopupData } from '@/data/popupData';
import Preloader from '@/components/Preloader';

interface SectionPopupClientProps {
  data: PopupData | undefined;
  ContentComponent?: ComponentType<{ data: PopupData; onCtaClick?: () => void }>;
}

export default function SectionPopupClient({ data, ContentComponent = PopupContent }: SectionPopupClientProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setIsOpen(true);
      // Simulate loading time (you can remove this setTimeout if you want it to load instantly)
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    }
  }, [data]);

  const handleClose = () => {
    router.back();
  };

  if (!data) {
    return null;
  }

  return (
    <>
      <Preloader isLoading={isLoading} />
      <Popup isOpen={isOpen} onClose={handleClose}>
        <ContentComponent data={data} onCtaClick={() => console.log('CTA clicked')} />
      </Popup>
    </>
  );
}
