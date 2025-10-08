import { popupData } from '@/data/popupData';
import SectionPopupClient from '@/components/SectionPopupClient';
import AboutContent from '@/components/AboutContent';

export default function AboutPage() {
  const data = popupData['about'];

  return <SectionPopupClient data={data} ContentComponent={AboutContent} />;
}
