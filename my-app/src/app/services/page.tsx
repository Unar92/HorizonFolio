import { popupData } from '@/data/popupData';
import SectionPopupClient from '@/components/SectionPopupClient';
import ServicesContent from '@/components/ServicesContent';

export default function ServicesPage() {
  const data = popupData['services'];

  return <SectionPopupClient data={data} ContentComponent={ServicesContent} />;
}
