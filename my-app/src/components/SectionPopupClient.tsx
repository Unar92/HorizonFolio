'use client';

import { useRouter } from 'next/navigation';
import Popup from '@/components/Popup';
import PopupContent from '@/components/PopupContent';
import { useEffect, useState } from 'react';
import { PopupData } from '@/data/popupData';

interface SectionPopupClientProps {
  data: PopupData | undefined;
}

export default function SectionPopupClient({ data }: SectionPopupClientProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (data) {
      setIsOpen(true);
    }
  }, [data]);

  const handleClose = () => {
    router.back();
  };

  if (!data) {
    return null;
  }

  return (
    <Popup isOpen={isOpen} onClose={handleClose}>
      <PopupContent data={data} onCtaClick={() => console.log('CTA clicked')} />
    </Popup>
  );
}
