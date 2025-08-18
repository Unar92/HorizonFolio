import { popupData } from '@/data/popupData';
import SectionPopupClient from '@/components/SectionPopupClient';

export async function generateStaticParams() {
  return Object.keys(popupData).map((sectionId) => ({
    sectionId,
  }));
}

export default function SectionPopup({ params }: { params: { sectionId: string } }) {
  const { sectionId } = params;
  const data = popupData[sectionId];

  return <SectionPopupClient data={data} />;
}
