import { useState } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';
import logo from './logo.svg';
import './MobileHeader.scss';

const MobileHeader = () => {
  const [open, setOpen] = useState(false);

  const handleMenuToggle = () => {
    setOpen(!open);
    console.log('clicking')
  };

  return (
    <div className='mobile-header'>
        <div className='header'>
          <img src={logo} alt='logo' />
          <div className='menu-btn' onClick={handleMenuToggle}>
            <div className='menu-btn-line'></div>
            <div className='menu-btn-line'></div>
          </div>
        </div>
        {open ? <MobileMenu open={open} setOpen={setOpen} /> : null}
    </div>
  );
};

export default MobileHeader;
