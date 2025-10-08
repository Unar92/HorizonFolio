import Image from 'next/image';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Image 
          src="/assets/img/logo.png"
          alt="logo" 
          width={150}
          height={50}
          priority
        />
      </div>
      <div className="menu-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Header;
