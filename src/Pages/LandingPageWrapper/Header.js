import React from 'react';
import { useTranslation } from 'react-i18next';
import Image1 from '../assets/hero-iss-image.png'

const HeroSection = ({ headline, subheadline, buttonText }) => {
  return (
    <div className="w-full bg-gray-50 text-black py-36 px-4 md:py-24 lg:py-32 xl:py-40">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl 2xl:text-8xl max-w-4xl  sm:leading-normal lg:leading-normal lg:tracking-wide">
          {headline}
        </h1>
        <p className="mt-4 text-lg sm:mt-6 sm:text-xl lg:text-xl 2xl:text-3xl font-light text-gray-800 max-w-3xl lg:max-w-3xl 2xl:max-w-6xl lg:leading-normal tracking-wide">
          {subheadline}
        </p>

        <div className="mt-8 sm:mt-10">
          <button
            className="
              inline-flex items-center justify-center 
              px-6 py-3 border border-transparent text-base font-medium rounded-2xl
              shadow-lg text-black hover:bg-white bg-[#7EFF64] border-gray-500
              sm:px-8 sm:py-4 sm:text-lg lg:text-xl 2xl:px-10 2xl:py-5 2xl:text-2xl
              transition duration-150 ease-in-out
            "
            onClick={() => console.log('Button clicked')}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const { t } = useTranslation();

  return (
    <HeroSection
      headline={t('headline')}
      subheadline={t('subheadline')}
      buttonText={t('buttonText')}
    />
  );
};

export default Header;