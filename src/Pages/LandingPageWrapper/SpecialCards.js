import React from 'react';
import { useTranslation } from 'react-i18next';

// Define the icons based on the style of the first uploaded image
const NAF_ICONS = {
  earlyBird: (
    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-coral-500 rounded-lg flex items-center justify-center">
      <svg className="paymenticons" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none"><path d="M21.6 10.8C21.6 16.7647 16.7647 21.6 10.8 21.6C4.83532 21.6 0 16.7647 0 10.8C0 4.83532 4.83532 0 10.8 0C16.7647 0 21.6 4.83532 21.6 10.8Z" fill="#FA7854"></path><path d="M55.8001 10.8C55.8001 16.7647 50.9648 21.6 45.0001 21.6C39.0354 21.6 34.2001 16.7647 34.2001 10.8C34.2001 4.83532 39.0354 0 45.0001 0C50.9648 0 55.8001 4.83532 55.8001 10.8Z" fill="#FA7854"></path><path d="M90 10.8C90 16.7647 85.1647 21.6 79.2 21.6C73.2353 21.6 68.4 16.7647 68.4 10.8C68.4 4.83532 73.2353 0 79.2 0C85.1647 0 90 4.83532 90 10.8Z" fill="#FA7854"></path><path d="M21.6 45C21.6 50.9647 16.7647 55.8 10.8 55.8C4.83532 55.8 0 50.9647 0 45C0 39.0353 4.83532 34.2 10.8 34.2C16.7647 34.2 21.6 39.0353 21.6 45Z" fill="#FA7854"></path><path d="M55.8001 45C55.8001 50.9646 50.9648 55.8 45.0001 55.8C39.0354 55.8 34.2001 50.9646 34.2001 45C34.2001 39.0353 39.0354 34.2 45.0001 34.2C50.9648 34.2 55.8001 39.0353 55.8001 45Z" fill="#FA7854"></path><path d="M90 45C90 50.9647 85.1647 55.8 79.2 55.8C73.2353 55.8 68.4 50.9647 68.4 45C68.4 39.0353 73.2353 34.2 79.2 34.2C85.1647 34.2 90 39.0353 90 45Z" fill="#FA7854"></path><path d="M21.6 79.2C21.6 85.1647 16.7647 90 10.8 90C4.83532 90 0 85.1647 0 79.2C0 73.2353 4.83532 68.4 10.8 68.4C16.7647 68.4 21.6 73.2353 21.6 79.2Z" fill="#FA7854"></path><path d="M55.8001 79.2C55.8001 85.1646 50.9648 90 45.0001 90C39.0354 90 34.2001 85.1646 34.2001 79.2C34.2001 73.2353 39.0354 68.4 45.0001 68.4C50.9648 68.4 55.8001 73.2353 55.8001 79.2Z" fill="#FA7854"></path><path d="M90 79.2C90 85.1647 85.1647 90 79.2 90C73.2353 90 68.4 85.1647 68.4 79.2C68.4 73.2353 73.2353 68.4 79.2 68.4C85.1647 68.4 90 73.2353 90 79.2Z" fill="#FA7854"></path></svg>
    </div>
  ),
  dehoga: (
    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-coral-500 rounded-lg flex items-center justify-center">
      <svg className="paymenticons" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M22.5 0H0V45H22.5C10.0736 45 0 55.0737 0 67.5V90H45V67.5C45 79.9263 55.0737 90 67.5 90H90V45H67.5C79.9263 45 90 34.9264 90 22.5V0H45V22.5C45 10.0736 34.9264 0 22.5 0ZM45 45H22.5C34.9264 45 45 55.0737 45 67.5V45ZM45 45V22.5C45 34.9264 55.0737 45 67.5 45H45Z" fill="#FA7854"></path></svg>
    </div>
  ),
  prizeDraw: (
    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-coral-500 rounded-lg flex items-center justify-center transform rotate-45">
      <svg className="paymenticons" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M0 19.2857L19.2857 0L30.6036 12.6969C38.2729 21.3007 51.7271 21.3007 59.3965 12.6969L70.7143 0L90 19.2857L78.2041 29.3518C68.5802 37.5644 68.5802 52.4356 78.2041 60.6482L90 70.7143L70.7143 90L59.6702 77.0581C51.9709 68.0357 38.0291 68.0357 30.3298 77.0581L19.2857 90L0 70.7143L12.3689 60.1592C21.692 52.2033 21.692 37.7967 12.3689 29.8408L0 19.2857Z" fill="#FA7854"></path></svg>
    </div>
  ),
};

const SpecialCard = ({ iconComponent, title, content, listItems = [], isLast }) => {
  const items = Array.isArray(listItems) ? listItems : [];
  
  return (
    <div className={` 
      p-4 sm:p-4 lg:p-8 flex flex-col h-full
      ${!isLast ? 'border-b lg:border-b-0 lg:border-r border-gray-600' : ''}
    `}>
      <div className="mb-14">{iconComponent}</div>
      <h3 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-white mb-8">
        {title}
      </h3>
      <p className="text-[18px] sm:text-lg text-gray-300 mb-8 flex-grow">
        {content}
      </p>
      {items.length > 0 && (
        <ul className="list-disc list-inside space-y-3 text-sm sm:text-base text-gray-300">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const TradeFairSpecialsDark = () => {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const earlyBirdItems = t('specials.earlyBird.listItems', { returnObjects: true });
  const dehogaItems = t('specials.dehoga.listItems', { returnObjects: true });
  const prizeDrawItems = t('specials.prizeDraw.listItems', { returnObjects: true });

  const specialData = [
    {
      iconComponent: NAF_ICONS.earlyBird,
      title: t('specials.earlyBird.title'),
      content: t('specials.earlyBird.content'),
      listItems: Array.isArray(earlyBirdItems) ? earlyBirdItems : [],
    },
    {
      iconComponent: NAF_ICONS.dehoga,
      title: t('specials.dehoga.title'),
      content: t('specials.dehoga.content'),
      listItems: Array.isArray(dehogaItems) ? dehogaItems : [],
    },
    {
      iconComponent: NAF_ICONS.prizeDraw,
      title: t('specials.prizeDraw.title'),
      content: t('specials.prizeDraw.content'),
      listItems: Array.isArray(prizeDrawItems) ? prizeDrawItems : [],
    },
  ];

  return (
    <div className="w-full bg-black py-16 px-4 sm:py-20 md:py-24 lg:py-32">
      {/* Inner container with max-width constraint */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-4 lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl 2xl:text-7xl mb-12 lg:mb-20 max-w-3xl lg:tracking-wide lg:leading-snug">
          {t('specials.headline')}
        </h2>
        
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-3 lg:gap-0 border border-gray-600"> 
          {specialData.map((special, index) => (
            <SpecialCard
              key={index}
              iconComponent={special.iconComponent}
              title={special.title}
              content={special.content}
              listItems={special.listItems}
              isLast={index === specialData.length - 1} 
            />
          ))}
        </div>

        <p className="mt-12 text-center text-xl sm:text-xl lg:text-2xl font-semibold text-white">
          {t('specials.validityNote')}
        </p>
        
        <div className="mt-8 flex items-center justify-center">
          <button 
            onClick={scrollToContact}
            className="
              inline-flex items-center justify-center 
              px-8 py-3 border border-transparent text-base font-medium rounded-3xl
              shadow-lg text-black hover:bg-white bg-[#7EFF64]
              sm:px-10 sm:py-4 sm:text-lg transition duration-150 ease-in-out
            "
          >
            {t('specials.ctaButton')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TradeFairSpecialsDark;