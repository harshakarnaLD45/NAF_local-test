import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import blogimage1 from '../../assets/Home/Blog banners 1.jpg';
import blogimage2 from '../../assets/Home/Blog banners 2.jpg';
import blogimage3 from '../../assets/Home/Blog banners 3.jpg';
import arrowBack from "../../assets/Vector (4).png";
import arrowForward from "../../assets/Vector (5).png";
import dateImage from "../../assets/Vector (2).svg";
import BlogPage from "./BlogDetailPage";
import { Box, Button, Stack } from "@mui/material";
import { Helmet } from "react-helmet";

// Define all 7 blogs here
// const blogData = [
//     {
//         title: "Der Automatenblog: Warum alles bei mir um Automaten geht",
//         date: "11 March 2025",
//         readTime: "6 Min Read",
//         introText: "Ich bin Odette – leidenschaftliche Gastgeberin und jetzt Vending-Visionärin. Die Idee zu NAF Automaten entstand aus der Liebe zur Gastronomie und dem Wunsch, Verpflegung smarter, effizienter und persönlicher zu gestalten.",
//         tableOfContents: [
//             { id: 1, title: "Meine Motivation" },
//             { id: 2, title: "Die Idee hinter NAF Automaten" },
//             { id: 3, title: "Was du hier erwarten kannst" },
//         ],
//         blogSections: [
//             {
//                 id: 1,
//                 title: "1. Meine Motivation",
//                 content: "Nach Jahren in der Gastronomie war klar: Es braucht neue Lösungen für altbekannte Probleme. NAF entstand aus dem Wunsch, Genuss und Effizienz zu vereinen.",
//             },
//             {
//                 id: 2,
//                 title: "2. Die Idee hinter NAF Automaten",
//                 content: "Unsere Automaten liefern in nur 3 Minuten frische, leckere Gerichte – ohne Stress, ohne Personalprobleme. Sie sind kleine Hightech-Restaurants für überall.",
//             },
//             {
//                 id: 3,
//                 title: "3. Was du hier erwarten kannst",
//                 content: "Dieser Blog zeigt dir unseren Alltag, unsere Ideen und unsere Mission – mehr als nur Technik, ein echtes Lebensgefühl.",
//             },
//         ],
//     },
//     {
//         title: "Die Evolution der Gastronomie – Von Herd & Herz zu Hightech & Automaten",
//         date: "11 March 2025",
//         readTime: "7 Min Read",
//         introText: "Die Gastronomie steht unter Druck. Personalmangel, steigende Kosten und neue Erwartungen zwingen uns zu neuen Lösungen. Die Antwort? Automatisierte, smarte Verpflegungslösungen.",
//         tableOfContents: [
//             { id: 1, title: "Die Krise der klassischen Gastronomie" },
//             { id: 2, title: "Die Idee hinter der Automatisierung" },
//             { id: 3, title: "Wie moderne Automaten helfen" },
//             { id: 4, title: "Die Zukunft ist smart" },
//         ],
//         blogSections: [
//             {
//                 id: 1,
//                 title: "1. Die Krise der klassischen Gastronomie",
//                 content: "Der klassische Betrieb – Küche, Koch, Kellner – stößt an seine Grenzen: zu wenig Personal, zu hohe Kosten, zu kurze Pausen für Gäste.",
//             },
//             {
//                 id: 2,
//                 title: "2. Die Idee hinter der Automatisierung",
//                 content: "Warum nicht Technologie nutzen, um Genuss effizienter zu gestalten? Automatisierung löst viele Probleme der klassischen Gastronomie.",
//             },
//             {
//                 id: 3,
//                 title: "3. Wie moderne Automaten helfen",
//                 content: "NAF Automaten liefern 24/7 gesunde Gerichte, sind hygienisch, kontaktlos und effizient – mit Kühl-, Heiz- und KI-Systemen.",
//             },
//             {
//                 id: 4,
//                 title: "4. Die Zukunft ist smart",
//                 content: "Die Gastronomie stirbt nicht – sie entwickelt sich weiter. Die Verbindung von Leidenschaft und Technologie ist der Weg in die Zukunft.",
//             },
//         ],
//     },
//     {
//         title: "Automaten-Software im Vergleich – Die unsichtbare Kraft hinter dem Erfolg",
//         date: "11 March 2025",
//         readTime: "7 Min Read",
//         introText: "Was viele nicht sehen: Die Software entscheidet über den Erfolg eines Automaten. Von Fernsteuerung bis Analyse – wir vergleichen führende Systeme.",
//         tableOfContents: [
//             { id: 1, title: "Warum die Software entscheidend ist" },
//             { id: 2, title: "Die wichtigsten Anbieter im Vergleich" },
//             { id: 3, title: "Worauf du achten solltest" },
//             { id: 4, title: "Fazit: Augen auf bei der Softwarewahl" },
//         ],
//         blogSections: [
//             {
//                 id: 1,
//                 title: "1. Warum die Software entscheidend ist",
//                 content: "Fehlererkennung, Verkaufsdaten, Fernsteuerung – moderne Cloud-Systeme optimieren Effizienz und Kundenzufriedenheit.",
//             },
//             {
//                 id: 2,
//                 title: "2. Die wichtigsten Anbieter im Vergleich",
//                 content: "Vergleich von Nayax, 4Suites, Vendon, NAF SmartCloud und Cantaloupe Seed Cloud – mit Fokus auf Flexibilität, Analyse und Integration.",
//             },
//             {
//                 id: 3,
//                 title: "3. Worauf du achten solltest",
//                 content: "Achte auf Live-Analysen, Fernzugriff, Zahlungsoptionen, Couponverwaltung und Update-Fähigkeit – besonders bei komplexen Standorten.",
//             },
//             {
//                 id: 4,
//                 title: "4. Fazit: Augen auf bei der Softwarewahl",
//                 content: "Die Software ist das Herz des Automaten. Wähle nicht nur den Automaten – wähle die Cloud, die deinen Erfolg steuert.",
//             },
//         ],
//     }
// ];
const blogData = [
    {
        title: "VERGLEICH VON VERKAUFSSOFTWARE – DIE UNSICHTBARE KRAFT HINTER DEM ERFOLG",

        date: "28. April 2025",
        readTime: "6 Min. Lesezeit",
        blogimage: blogimage3,
        introText: "Warum die Software hinter deinem Verkaufsautomaten wichtiger ist, als du denkst",

        tableOfContents: [
            { id: 1, title: "Was macht großartige Verkaufssoftware aus?" },
            { id: 2, title: "Kurz gesagt:" },
        ],
        blogSections: [
            {
                id: 1,
                content: "Heutzutage ist es einfacher denn je, einen modernen Food- oder Verkaufsautomaten einzurichten.",
            },
            {
                id: 2,
                content: "Was jedoch viele übersehen: Echter Erfolg hängt nicht nur von Technologie oder Design ab – sondern von der Software, die ihn antreibt.",
            },
            {
                id: 3,
                content: "Eine hochwertige Cloud-Software für Verkaufsautomaten entscheidet darüber, ob:",
                // blogpoints: [
                //   { id: 1, content: "• Dein Automat effizient läuft" },
                //   { id: 2, content: "• Probleme in Echtzeit erkannt werden" },
                //   { id: 3, content: "• Verkaufsdaten transparent und nutzbar sind" },
                //   { id: 4, content: "• Du flexibel auf Kundenbedürfnisse reagieren kannst" },
                //   { id: 5, content: "• Personalkosten durch Automatisierung gesenkt werden" },
                // ]
            },
            {
                id: 5,
                content: "Ohne moderne Software kann ein Automat schnell von einer Lösung zum Problem werden.",
            },
            {
                id: 6,
                title: "Was macht großartige Verkaufssoftware aus?",
                content:
                    "Und das ist erst der Anfang. Ob in Hotels, Büros, Krankenhäusern oder Tankstellen – die Zukunft des Essens ist automatisiert und personalisiert.",
                // blogpoints: [
                //   { id: 1, content: "Echtzeit-Fehlererkennung: Warnungen, bevor Kunden Probleme bemerken" },
                //   { id: 2, content: "Datenbasierte Optimierung: Wissen, was sich verkauft und wann nachgefüllt werden muss" },
                //   { id: 3, content: "Fernsteuerung: Preise ändern, Rabatte anbieten oder Menüs sofort aktualisieren" },
                //   { id: 4, content: "Wartungsverfolgung: Komponentenlaufzeiten überwachen, Updates einspielen und Ausfälle vermeiden" },
                // ]
            },
            {
                id: 7,
                title: "Kurz gesagt:",
                content:
                    "Die Software ist das Herzstück deines Automaten – sie treibt Effizienz, Kostenkontrolle und Kundenzufriedenheit voran.",
            },
        ]
    },
    {
        title: "WER BIN ICH – UND WARUM DREHT SICH MEIN LEBEN NUR UM VERKAUFSAUTOMATEN?",

        date: "21. April 2025",
        blogimage: blogimage2,
        readTime: "6 Min. Lesezeit",
        introText: "Von herzlicher Gastfreundschaft zu High-Tech-Food-Lösungen",

        tableOfContents: [
            { id: 1, title: "Unsere Mission – kurz gesagt:" },
            { id: 2, title: "Warum ich diesen Blog schreibe" },
        ],

        blogSections: [
            {
                id: 1,
                content: "Hallo, ich bin Odette Lamkhizni – leidenschaftliche Gastgeberin, engagierte Feinschmeckerin und jetzt eine Visionärin im Bereich Verkaufsautomaten.",
            },
            {
                id: 2,
                content: "Viele Jahre lang war die Gastronomie mein Zuhause. Ich liebe es, Menschen zu begeistern – mit gutem Essen, echten Momenten und herzlichem Service.",
            },
            {
                id: 3,
                content: "Aber ich habe auch die Herausforderungen erlebt: Personalmangel, lange Arbeitszeiten und hohe Betriebskosten. Kommt dir das bekannt vor?",
            },
            {
                id: 4,
                content: "Also habe ich mich gefragt:",
            },
            {
                id: 5,
                content: "Warum nicht anders denken?",
            },
            {
                id: 6,
                content: "Warum nicht alles neu überdenken?",
            },
            {
                id: 7,
                content: "So begann die Geschichte der NAF Verkaufsautomaten.",
            },
            {
                id: 8,
                title: "Unsere Mission – kurz gesagt:",
                content: "Wir liefern frische, leckere und gesunde Mahlzeiten in nur 3 Minuten – jederzeit und überall!",
            },
            {
                id: 9,
                content: "Kein Stress, kein Personalmangel, keine Kompromisse.",
            },
            {
                id: 10,
                content: "Unsere Automaten sind keine gewöhnlichen Verkaufsautomaten – sie sind kleine High-Tech-Restaurants auf Knopfdruck.",
            },
            {
                id: 11,
                content: "Ob in Hotels, Büros, Krankenhäusern oder Tankstellen – sie sind rund um die Uhr im Einsatz:",
            },
            {
                id: 12,
                content: "Frisch. Nachhaltig. Effizient. Einfach WOW.",
            },
            {
                id: 13,
                title: "Warum ich diesen Blog schreibe",
                content: "Weil ich dich mitnehmen möchte auf diese Reise:",
            },
            {
                id: 14,
                content: "Hinter die Kulissen, in unseren Arbeitsalltag und durch echte Erfolgsgeschichten und neue Ideen.",
            },
            {
                id: 15,
                content: "Wir sind mehr als nur Technologie – wir sind ein Lebensgefühl.",
            },
        ]
    },
    {
        title: "DIE EVOLUTION DER GASTRONOMIE – VON HERD & HERZ ZU HIGH-TECH & VERKAUFSAUTOMATEN",
        subtitle: "",
        date: "14. April 2025",
        blogimage: blogimage1,
        readTime: "6 Min. Lesezeit",
        introText: "Mehr als Leidenschaft – der Wendepunkt einer Branche",

        tableOfContents: [
            { id: 1, title: "Meine Motivation" },
            { id: 2, title: "Persönliche Notiz von Odette:" },
        ],

        blogSections: [
            {
                id: 1,
                content: "Die Gastronomie war schon immer ein Ort der Begegnung, des Genusses und der Emotionen – einst geprägt von klassischer Küche, Köchen und Servicekräften, die mit Herz, Hitze und Hingabe arbeiteten. Doch steigender Druck wie Personalmangel, wachsende Kosten und zunehmende Erwartungen der Gäste forderten Veränderung. Die Tradition traf auf harte Realität: kurze Pausen, eingeschränkte Öffnungszeiten, Nachhaltigkeitsprobleme und eine Flut an Verpackungsmüll.",
            },
            {
                id: 1,
                content: "Ein neuer Weg war notwendig – ein Weg der Innovation.",
            },
            {
                id: 2,
                content: "Moderne Verkaufsautomaten mit Touchscreens, Heiz- und Kühlsystemen sowie KI sind mehr als bloße Verkaufsstellen – sie sind Mini-Restaurants mit intelligentem Kern.",
            },
            {
                id: 3,
                content: "Die Botschaft ist klar: Die Gastronomie stirbt nicht – sie wird smarter.",
            },
            {
                id: 4,
                content: "Verkaufsautomaten sind kein Ersatz für Leidenschaft, sondern eine Antwort auf echte Herausforderungen – sie schaffen Raum, Effizienz und neue Genussmomente.",
            },
            {
                id: 5,
                content: "Und das ist erst der Anfang. Ob in Hotels, Büros, Krankenhäusern oder Tankstellen – die Zukunft des Essens ist automatisiert und personalisiert.",
            },
            {
                id: 6,
                content: "Ein neuer Weg war notwendig – ein Weg der Innovation.",
            },
            {
                id: 7,
                title: "Persönliche Notiz von Odette:",
                content: "Ich komme aus der Gastronomie und kenne sowohl die Liebe zum Essen als auch die täglichen Herausforderungen hinter den Kulissen.",
            },
            {
                id: 8,
                content: "Deshalb habe ich NAF gegründet: um Tradition und Technologie, Genuss und Effizienz miteinander zu verbinden.",
            },
        ]
    },
]

const BlogContainer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { lang } = useParams();
    const initialIndex = location.state?.blogIndex ?? 0;
    const [currentBlogIndex, setCurrentBlogIndex] = useState(initialIndex);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        // Update index when navigating between blog entries
        if (location.state?.blogIndex !== undefined) {
            setCurrentBlogIndex(location.state.blogIndex);
        }
    }, [location.state]);

    const handleBack = () => {
        if (currentBlogIndex === 0) {
            navigate(`/${lang}/Insights`);
        } else {
            setCurrentBlogIndex((prev) => prev - 1);
        }
    };

    const handleNext = () => {
        if (currentBlogIndex < blogData.length - 1) {
            setCurrentBlogIndex((prev) => prev + 1);
        }
    };

    const blog = blogData[currentBlogIndex];

    return (
        <Box sx={{ minHeight: "100vh", width: "100%", my: { xs: 13, sm: 15, md: 20 } }}>
            <Helmet>
                <title>NAF Vending - Blog</title>
                <link rel="canonical" href="https://vendinaf.com/en/Insights/blog" />
                <meta name='description'
                    content="Discover NAF’s AI-powered food vending machines near you. Enjoy fresh, sustainable NAF solutions with smart technology and cloud management. Partner today!" />
                <meta name="keywords"
                    content="Pizza vending machine, Fries vending machine, NAF food vending, NAF sustainable vending, Soft ice cream vending, Cotton candy vending, Beer vending machine, Return vending system, Gourmet vending machine, Vending maintenance support, NAF cloud system, Real-time vending analytics, Inventory management vending, Targeted vending ads, Remote machine monitoring, Vending machine leasing, Vending machine partnerships, Germany vending solutions, Innovative vending technology, Food waste reduction vending, Reusable packaging vending, Vending for hotels/universities, Fresh food vending machine, Local food vending, AI vending machines, Smart vending solutions, Automated vending systems, Sustainable vending, Cloud-based vending, Custom vending machines, High-performance vending, Vending machine management, Eco-friendly vending, AI gastronomy, NAF AI vending, NAF vending machines, Near food vending machine, Food vending near me" />
                <meta name="author" content="NAF Vending" />
                <meta name="robots" content="index, follow" />
                <html lang="en" />
            </Helmet>
            <Box sx={{ position: "relative" }} className="section-container blogdetailedcontainer">
                <Stack direction="row" justifyContent="space-between">
                    <Button
                        onClick={handleBack}
                        sx={{ color: "#FCFCFC", padding: 0, textTransform: "none", "&:hover": { backgroundColor: "transparent" } }}
                        className="bodyRegularText2"
                    >
                        <img src={arrowBack} alt="Back Arrow" style={{ width: 18, height: 15, marginRight: 8 }} />
                        Zurück
                    </Button>

                    {currentBlogIndex < blogData.length - 1 && (
                        <Button
                            onClick={handleNext}
                            sx={{ color: "#FCFCFC", padding: 0, textTransform: "none", "&:hover": { backgroundColor: "transparent" } }}
                            className="bodyRegularText2"
                        >
                            Weiter
                            <img src={arrowForward} alt="Next Arrow" style={{ width: 18, height: 15, marginLeft: 8, aspectRatio: "3/4" }} />
                        </Button>
                    )}
                </Stack>

                <BlogPage
                    title={blog.title}
                    date={blog.date}
                    readTime={blog.readTime}
                    introText={blog.introText}
                    tableOfContents={blog.tableOfContents}
                    blogSections={blog.blogSections}
                    blogImage={blog.blogimage}
                    prevRoute={currentBlogIndex === 0 ? `${lang}/Insights` : null}
                    nextRoute={currentBlogIndex < blogData.length - 1 ? `/blog/${currentBlogIndex + 1}` : null}
                    dateIcon={dateImage}
                />
            </Box>
        </Box>
    );
};

export default BlogContainer;
