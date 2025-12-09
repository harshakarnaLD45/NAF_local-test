import React from 'react'
import NavBar from './NavBar'
import Header from './Header'
import AboutNAFWithData from './AboutNaf'
import ContactForm from './ContactForm'
import Card from './SpecialCards';
import { useTranslation } from 'react-i18next'
import PDF from '../assets/NAF-Dehoga Messe.pdf'
import PDF1 from '../assets/Investitionsförderung.pdf'

function HomePage() {
    const { t } = useTranslation();
    return (
        <div>
            <NavBar />
            <Header />

            <div className="w-full bg-gray-50 text-black pt-0 pb-0 px-0 
                  md:pt-20 md:pb-20 md:px-4">

                <div className="max-w-[1920px] mx-auto px-0 sm:px-6 lg:px-8 md:px-8">

                    <div className="bg-[#F5F5F5] rounded-3xl py-8 px-4 
    lg:py-14 md:px-16 
    flex flex-col min-[1275px]:flex-row justify-between items-center gap-8">

                        {/* LEFT TEXT */}
                        <div className="md:text-left max-w-3xl">
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                                {t("exploreTitle")}
                            </h2>
                            <p className="mt-4 text-lg md:text-xl text-gray-700">
                                {t("exploreSubtitle")}
                            </p>
                        </div>

                        {/* RIGHT BUTTONS */}
                        <div className="flex flex-col md:flex-row items-center gap-4 whitespace-nowrap">

                            {/* ✅ Button 1: NAF PDF */}
                            <a
                                href={PDF}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#7CF66D] text-black font-medium px-6 py-3 md:px-8 md:py-4
                   rounded-full text-lg shadow-md hover:opacity-90 transition"
                            >
                                {t("downloadPdf")}
                            </a>

                            {/* ✅ Button 2: Funding PDF */}
                            <a
                                href={PDF1}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#7CF66D] text-black font-medium px-6 py-3 md:px-8 md:py-4
                   rounded-full text-lg shadow-md hover:opacity-90 transition"
                            >
                                {t("downloadPdf1")}
                            </a>

                        </div>
                    </div>

                </div>
            </div>
            <AboutNAFWithData />
            <Card />
            <ContactForm />

            <footer className="bg-black py-6 px-4 md:px-10 w-full">
                <div className="
        max-w-[1920px] mx-auto 
        flex flex-col items-center gap-2
        md:flex-row md:justify-between md:items-center
    ">
                    <p className="text-white m-0 text-center md:text-left">
                        {t("copyright")}
                    </p>

                    {/* LINKS WITH SEPARATOR */}
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center text-blue-400">

                        <a
                            href="https://vendinaf.com/de/imprint"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            {t("imprint")}
                        </a>

                        {/* ✅ VERTICAL SEPARATOR */}
                        <span className="hidden md:block text-white">|</span>
                        <span className="md:hidden text-white">|</span>

                        <a
                            href="https://vendinaf.com/de/privacy-policy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            {t("privacy")}
                        </a>

                    </div>
                </div>
            </footer>

        </div>
    )
}

export default HomePage