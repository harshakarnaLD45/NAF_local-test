import { useLocation, useNavigate } from "react-router-dom";
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
        title: "THE EVOLUTION OF GASTRONOMY – FROM STOVE & SOUL TO HIGH-TECH & VENDING MACHINES",
        subtitle: "",
        date: "14 April 2025",
        blogimage: blogimage1,
        readTime: "6 Min Read",
        introText: "More than passion – the turning point of an industry",
        tableOfContents: [
            { id: 1, title: "My Motivation" },
            { id: 2, title: "Personal Note from Odette:" },

        ],
        blogSections: [
            { id: 1, content: "Gastronomy has always been a place of encounters, enjoyment, and emotion—once dominated by the classic kitchen, chefs, and waitstaff, operating with heart, heat, and hustle. But rising pressures like staff shortages, increasing costs, and growing guest expectations demanded change. Tradition met harsh realities: short breaks, limited opening hours, sustainability challenges, and a flood of packaging waste." },
            {
                id: 1, content: "A new path was necessary—one of innovation.",
                // blogpoints: [
                //     {id: 1, content: "•	Modern vending machines, like those from NAF, are reshaping food service. Offering fresh, hot meals in just 3 minutes, 24/7, without staff, they provide:Healthy meals around the clock" },
                //      { id: 2, content: "Hygienic, contactless service" },
                //     { id: 3, content: "Flexibility for users and operators" },
                //     { id: 4, content: "Stylish design that fits into any environment" },
                //     { id: 5, content: "Cost savings through reduced staffing" },

                // ]
            },
            { id: 2, content: "These high-tech vending systems with touchscreens, heating/cooling systems, and AI are more than just sales points—they're mini-restaurants with smart cores." },
            { id: 3, content: "The message is clear: gastronomy isn't dying—it's becoming smarter." },
            { id: 4, content: " Vending machines are not a substitute for passion, but a solution to real challenges, creating space, efficiency, and new moments of enjoyment." },
            { id: 5, content: "And this is just the beginning. Whether in hotels, offices, hospitals, or gas stations, the future of dining is automated and personalized." },
            { id: 6, content: "A new path was necessary—one of innovation." },
            {
                id: 7, title: "Personal Note from Odette:",
                content: "Coming from a gastronomy background, I know both the love for food and the daily backstage struggles."
            },
            { id: 8, content: "That’s why I founded NAF: to bring together tradition and technology, pleasure and efficiency." },
        ],

    },
    {
        title: "WHO AM I – AND WHY IS MY LIFE ALL ABOUT VENDING MACHINES?",

        date: "21 April 2025",
        blogimage: blogimage2,
        readTime: "6 Min Read",
        introText: "From Heartfelt Hospitality to High-Tech Food Solutions",
        tableOfContents: [
            { id: 1, title: "Our Mission – Simply Put:" },
            { id: 2, title: "Why I’m Writing This Blog" },

        ],
        blogSections: [
            {
                id: 1, content: "Hi, I’m Odette Lamkhizni – passionate host, devoted gastronome, and now a vending visionary.",

            },
            {
                id: 2, content: "Hospitality was my home for many years. I love delighting people—with great food, genuine moments, and heartfelt service.",

            },
            { id: 3, content: "But I also witnessed the challenges: labor shortages, long hours, and high operational costs. Sound familiar?" },
            { id: 4, content: "So I asked myself:" },
            { id: 5, content: "Why not think differently?" },
            { id: 6, content: "Why not rethink everything?" },
            { id: 7, content: "That’s how the story of NAF Vending Machines began." },
            {
                id: 8,
                title: "Our Mission – Simply Put:",
                content: "We deliver fresh, delicious, and healthy meals in just 3 minutes—anytime, anywhere!"

            },


            { id: 9, content: "No stress, no staff shortages, no compromises" },
            { id: 10, content: "Our machines are not your average vending machines—they’re little high-tech restaurants at the push of a button." },
            { id: 11, content: "  Whether in hotels, offices, hospitals, or gas stations—they serve around the clock:" },
            { id: 12, content: " Fresh. Sustainable. Efficient. Simply WOW." },


            {
                id: 13,
                title: "Why I’m Writing This Blog",
                content: "Because I want to take you along for the ride:",

            },
            { id: 14, content: "Behind the scenes, into our everyday work, and through real success stories and new ideas." },



            { id: 15, content: "We’re more than technology—we’re a lifestyle." },

        ]
    },
    {
        title: "VENDING SOFTWARE COMPARISON – THE INVISIBLE FORCE BEHIND SUCCESS",

        date: "28 April 2025",
        readTime: "6 Min Read",
        blogimage: blogimage3,
        introText: "Why the software behind your vending machine matters more than you think",

        tableOfContents: [
            { id: 1, title: "What makes great vending software?" },
            { id: 2, title: "In short:" },

        ],
        blogSections: [
            {
                id: 1, content: "Setting up a modern food or vending machine today is easier than ever.",

            },
            { id: 2, content: "But what many overlook: true success doesn't just depend on technology or design—it depends on the software that powers it" },
            {
                id: 3, content: "A high-quality vending cloud software determines whether:",
                // blogpoints: [
                //     {id: 1, content: "•	Your machine runs efficiently" },
                //      { id: 2, content: "•	Issues are detected in real-time" },
                //     { id: 3, content: "•	Sales data is transparent and actionable" },
                //     { id: 4, content: "•	You can respond flexibly to customer needs" },
                //     { id: 5, content: "Cost savings through reduced staffing" },

                // ] 
            },
            { id: 5, content: " Without modern software, a machine can quickly turn from a solution into a problem" },

            {
                id: 6, title: "What makes great vending software?", content: "And this is just the beginning. Whether in hotels, offices, hospitals, or gas stations, the future of dining is automated and personalized.",
                // blogpoints: [
                //     {id: 1, content: "Real-time error detection: Alerts before customers notice a problem•	Your machine runs efficiently" },
                //      { id: 2, content: "Data-based optimization: Know what's selling and when to restock" },
                //     { id: 3, content: "Remote control: Change prices, offer discounts, or upload new menus instantly" },
                //     { id: 4, content: "Maintenance tracking: Monitor component lifespans, push updates, and avoid breakdowns" },


                // ]
            },
            {
                id: 7, title: "In short:",
                content: " The software is the heart of your machine—driving efficiency, cost control, and customer satisfaction."
            },

        ]
    },]
const BlogContainer = () => {
    const location = useLocation();
    const navigate = useNavigate();
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
            navigate("/Insights");
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
                        Back
                    </Button>

                    {currentBlogIndex < blogData.length - 1 && (
                        <Button
                            onClick={handleNext}
                            sx={{ color: "#FCFCFC", padding: 0, textTransform: "none", "&:hover": { backgroundColor: "transparent" } }}
                            className="bodyRegularText2"
                        >
                            Next
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
                    prevRoute={currentBlogIndex === 0 ? "/Insights" : null}
                    nextRoute={currentBlogIndex < blogData.length - 1 ? `/blog/${currentBlogIndex + 1}` : null}
                    dateIcon={dateImage}
                />
            </Box>
        </Box>
    );
};

export default BlogContainer;
