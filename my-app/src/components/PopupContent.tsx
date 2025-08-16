import Image from 'next/image';
import { PopupData } from '../data/popupData';

interface PopupContentProps {
  data: PopupData;
  onCtaClick?: () => void;
}

const PopupContent = ({ data, onCtaClick }: PopupContentProps) => {
  return (
    <>
      <div className="popup-header">
        <Image
          src={data.bannerImage}
          alt={data.title}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <h1>{data.title}</h1>
      </div>
      <div className="popup-body">
        <div className="popup-main-content">
          <p>{data.mainContent}</p>
        </div>
        <div className="popup-features">
          <h3>Key Features</h3>
          <ul>
            {data.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="popup-footer">
        <button className="cta-button" onClick={onCtaClick}>
          {data.cta}
        </button>
      </div>
    </>
  );
};

export default PopupContent;
