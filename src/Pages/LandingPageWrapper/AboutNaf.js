import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutNAF = ({ title, intro, keyInnovations, features = [], useCases }) => {
  return (
    <div className="w-full bg-gray-50 py-6 px-4 sm:py-16 md:py-24 lg:py-24">
      {/* Inner container with max-width constraint */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Title and Intro */}
        <div className="text-black mb-12 sm:mb-16">
          <h2 className="text-3xl font-bold  sm:text-3xl lg:text-5xl 2xl:text-6xl leading-normal tracking-normal mb-8">
            {title}
          </h2>
          <p className="mt-4 text-xl sm:text-xl font-light text-gray-700 max-w-4xl">
            {intro}
          </p>
        </div>
        
        {/* Core Content: Features and Call to Action */}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
          {/* Column 1: Feature List */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-black">
              {keyInnovations}
            </h3>
            <ul className="space-y-6 sm:space-y-8 mb-12">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="flex-shrink-0 h-6 w-6 text-indigo-500 mt-1 sm:mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="ml-3 text-[18px] sm:text-xl text-gray-800">
                    <span className="font-semibold">{feature.split('–')[0].trim()} –</span> {feature.split('–')[1].trim()}
                  </p>
                </li>
              ))}
            </ul>
            <p className="text-[18px] sm:text-xl text-gray-800">
              {useCases}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutNAFWithData = () => {
  const { t } = useTranslation();
  return (
    <AboutNAF 
      title={t('about.title')} 
      intro={t('about.intro')} 
      keyInnovations={t('about.keyInnovations')}
      features={t('about.features', { returnObjects: true })} 
      useCases={t('about.useCases')} 
    />
  );
};

export default AboutNAFWithData;