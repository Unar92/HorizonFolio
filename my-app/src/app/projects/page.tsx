import { popupData } from '@/data/popupData';
import SectionPopupClient from '@/components/SectionPopupClient';
import PortfolioContent from '@/components/PortfolioContent';

export default function ProjectsPage() {
  const data = popupData['projects'];

  return <SectionPopupClient data={data} ContentComponent={PortfolioContent} />;
}
