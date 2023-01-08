import React, { memo } from 'react';
import Footer from './components/ReusableComponents/Footer/Footer';
import Header from './components/ReusableComponents/Header/Header';
import GalleryWrapper from './components/UserComponents/Content/Gallery/GalleryWrapper';
import { BG_COLOR } from './style';

const App = () => {
  return (
    <div className={`min-h-screen font-normal ${BG_COLOR.LIGHT_BG} grid grid-rows-layout`}>
      <Header />
      <GalleryWrapper />
      <Footer />
    </div>
  );
}

export default memo(App);
