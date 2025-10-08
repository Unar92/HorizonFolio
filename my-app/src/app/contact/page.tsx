import { popupData } from '@/data/popupData';
import SectionPopupClient from '@/components/SectionPopupClient';
import ContactContent from '@/components/ContactContent';

export default function ContactPage() {
  const data = popupData['contact'];

  return <SectionPopupClient data={data} ContentComponent={ContactContent} />;
}
