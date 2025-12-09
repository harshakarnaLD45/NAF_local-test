import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

const DarkInput = ({ label, type = 'text', required = true, isSelect = false, children, value, onChange, name }) => {
  return (
    <div className="mb-8">
      <label className="block text-white text-[18px] font-normal mb-1">
        {label} {required && <span className="text-sm text-red-500">*</span>}
      </label>
      {isSelect ? (
        <div className="relative border-b border-gray-600 focus-within:border-green-500 transition duration-300">
          <select 
            className="appearance-none w-full bg-black text-gray-300 py-3 focus:outline-none text-xl"
            value={value}
            onChange={onChange}
            name={name}
          >
            {children}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-300">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      ) : (
        <input
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          name={name}
          className="w-full bg-black text-gray-300 py-3 border-b border-gray-600 focus:border-green-500 focus:outline-none text-xl transition duration-300"
        />
      )}
    </div>
  );
};

const ContactForm = () => {
  const { t } = useTranslation();
  
  // Form field states
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });
  
  const [isDehogaMember, setIsDehogaMember] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [showInterestError, setShowInterestError] = useState(false);
  const [showDehogaError, setShowDehogaError] = useState(false);
  const [showGDPROError, setShowGDPROError] = useState(false);

  const interestsList = t('contact.interestsList', { returnObjects: true }) || [];
  const isInterestsListArray = Array.isArray(interestsList);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestChange = (item) => {
    setSelectedInterests((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
    if (showInterestError) setShowInterestError(false);
  };

  // ✅ Reset form function
  const resetForm = () => {
    setFormData({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      location: '',
      message: ''
    });
    setIsDehogaMember('');
    setSelectedInterests([]);
    setAcceptedTerms(false);
    setShowInterestError(false);
    setShowDehogaError(false);
    setShowGDPROError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    if (selectedInterests.length === 0) {
      setShowInterestError(true);
      valid = false;
    }
    if (!isDehogaMember) {
      setShowDehogaError(true);
      valid = false;
    }
    if (!acceptedTerms) {
      setShowGDPROError(true);
      valid = false;
    }

    if (!valid) return;

    const templateParams = {
      fullName: formData.fullName,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      location: formData.location,
      message: formData.message,
      dehoga: isDehogaMember,
      interests: selectedInterests.join(', '),
    };

    emailjs
      .send(
        'service_m9cjyf7',   // service id
        'template_ka6dtns', // Template id
        templateParams,
        'oohP8NNTJgl2SPoOz' // public id 
      )
      .then(
        (response) => {
          console.log('✅ Email sent successfully:', response.status, response.text);
          setShowThankYou(true);
        },
        (error) => {
          console.error('❌ Failed to send email:', error);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  const handleCloseThankYou = () => {
    setShowThankYou(false);
    resetForm(); // Reset form when closing thank you message
  };

   if (showThankYou) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
        <div className="bg-gray-900 p-10 sm:p-16 rounded-xl shadow-2xl max-w-lg w-full text-center">
          <svg className="w-16 h-16 text-green-500 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <h2 className="text-3xl font-bold text-white mb-4">{t('contact.thankYouTitle')}</h2>
          <p className="text-gray-300 text-lg">
            {t('contact.thankYouMessage')}
          </p>
          <button
            onClick={handleCloseThankYou}
            className="mt-8 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
          >
            {t('contact.closeButton')}
          </button>
        </div>
      </div>
    );
  }


  return (
    <div className="w-full bg-black py-16 px-4 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 border border-gray-700 py-8 rounded-3xl">
        <h2 className="text-3xl sm:text-xl lg:text-3xl font-bold flex items-center justify-center text-white mb-12 pb-4">
          {t('contact.headline')}
        </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Inputs with controlled values */}
            <DarkInput
              label={t('contact.fullName')}
              required={true}
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
            />
            <DarkInput
              label={t('contact.company')}
              required={true}
              name="company"
              value={formData.company}
              onChange={handleInputChange}
            />
            <DarkInput
              label={t('contact.email')}
              type="email"
              required={true}
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <DarkInput
              label={t('contact.phone')}
              type="tel"
              required={false}
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <DarkInput
              label={t('contact.location')}
              required={false}
              name="location"
              value={formData.location}
              onChange={handleInputChange}
            />

          {/* Areas of Interest */}
          <div className="pt-8">
            <label className="block text-white text-base font-normal mb-4">
              {t('contact.areasOfInterest')}
              <span className="text-sm text-red-500">*</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-gray-300">
              {isInterestsListArray && interestsList.map((item) => (
                <label key={item} className="flex items-center space-x-3 text-lg cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedInterests.includes(item)}
                    onChange={() => handleInterestChange(item)}
                    className="h-5 w-5 accent-green-500 bg-black border-gray-600 rounded focus:ring-green-500"
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>

              {showInterestError && (
                <p className="text-red-500 text-sm mt-2">
                  {t('contact.interestError')}
                </p>
              )}
            </div>

          {/* DEHOGA Member */}
          <div className="pt-8 border-t border-gray-700 mt-10">
            <label className="block text-white text-base font-normal mb-4">
              {t('contact.dehogaQuestion')}
              <span className="text-sm text-red-500">*</span>
            </label>

            <div className="flex flex-col sm:flex-row sm:space-x-8 text-lg space-y-3 sm:space-y-0">
              <label className="flex items-center space-x-2 text-gray-300 cursor-pointer">
                <input
                  type="radio"
                  name="dehoga"
                  value="Yes"
                  checked={isDehogaMember === 'Yes'}
                  onChange={() => {
                    setIsDehogaMember('Yes');
                    setShowDehogaError(false);
                  }}
                  className="h-5 w-5 accent-green-500 bg-black border-gray-600 focus:ring-green-500"
                />
                <span>{t('contact.dehogaYes')}</span>
              </label>

              <label className="flex items-center space-x-2 text-gray-300 cursor-pointer">
                <input
                  type="radio"
                  name="dehoga"
                  value="No"
                  checked={isDehogaMember === 'No'}
                  onChange={() => {
                    setIsDehogaMember('No');
                    setShowDehogaError(false);
                  }}
                  className="h-5 w-5 accent-green-500 border-gray-600 focus:ring-green-500"
                />
                <span>{t('contact.dehogaNo')}</span>
              </label>
            </div>

              {isDehogaMember === 'Yes' && (
                <p className="mt-4 text-green-400 text-lg font-semibold bg-gray-900 p-3 rounded">
                  {t('contact.dehogaAdvantage')}
                </p>
              )}

              {showDehogaError && (
                <p className="text-red-500 text-sm mt-2">
                  {t('contact.dehogaError')}
                </p>
              )}
            </div>

          {/* Message */}
          <div className="pt-8">
            <label className="block text-white text-base font-normal mb-1">{t('contact.message')}</label>
            <textarea
              rows="2"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full text-gray-300 py-3 bg-black border-b border-gray-600 focus:border-green-500 text-lg resize-none"
            ></textarea>
          </div>

          {/* GDPR Validation */}
          <div className="pt-8">
            <label className="flex items-start space-x-3 text-sm sm:text-base text-gray-400 cursor-pointer">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => {
                  setAcceptedTerms(e.target.checked);
                  if (showGDPROError && e.target.checked) setShowGDPROError(false);
                }}
                className="flex-shrink-0 h-5 w-5 mt-1 accent-green-500 bg-black border-gray-600 rounded focus:ring-green-500"
              />
              <span className="text-white">
                <span className="text-sm text-red-500">*</span> {t('contact.gdprText')}
              </span>
            </label>

              {showGDPROError && (
                <p className="text-red-500 text-sm mt-2">
                  {t('contact.gdprError')}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-10 text-center">
              <button
                type="submit"
                className="bg-[#7EFF64] hover:bg-white text-black text-base lg:text-lg font-medium py-4 px-4 lg:px-6 rounded-3xl transition duration-300 shadow-xl"
              >
                {t('contact.submitButton')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;