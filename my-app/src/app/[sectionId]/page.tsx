import { popupData } from '@/data/popupData';
import SectionPopupClient from '@/components/SectionPopupClient';
import AboutContent from '@/components/AboutContent';
import ServicesContent from '@/components/ServicesContent';
import PortfolioContent from '@/components/PortfolioContent';
import ContactContent from '@/components/ContactContent';
import PopupContent from '@/components/PopupContent';

const contentComponents: Record<string, any> = {
  'about': AboutContent,
  'services': ServicesContent,
  'projects': PortfolioContent,
  'contact': ContactContent,
};

export async function generateStaticParams() {
  // Include both the specific page names and any remaining section IDs
  return Object.keys(popupData).map((sectionId) => ({
    sectionId,
  }));
}

export default function SectionPopup({ params }: { params: { sectionId: string } }) {
  const { sectionId } = params;
  const data = popupData[sectionId];
  const ContentComponent = contentComponents[sectionId] || PopupContent;

  return <SectionPopupClient data={data} ContentComponent={ContentComponent} />;
}
