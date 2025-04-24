import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import blogImage from "../../assets/representations-user-experience-interface-design 1.png";
import arrowBack from "../../assets/Vector (4).png";
import arrowForward from "../../assets/Vector (5).png";
import dateImage from "../../assets/Vector (2).svg";
import BlogPage from "./BlogDetailPage";
import { Box, Button, Stack } from "@mui/material";

// Define all 7 blogs here
const blogData = [
    {
        title: "Der Automatenblog: Warum alles bei mir um Automaten geht",
        date: "11 March 2025",
        readTime: "6 Min Read",
        introText: "Ich bin Odette – leidenschaftliche Gastgeberin und jetzt Vending-Visionärin. Die Idee zu NAF Automaten entstand aus der Liebe zur Gastronomie und dem Wunsch, Verpflegung smarter, effizienter und persönlicher zu gestalten.",
        tableOfContents: [
            { id: 1, title: "Meine Motivation" },
            { id: 2, title: "Die Idee hinter NAF Automaten" },
            { id: 3, title: "Was du hier erwarten kannst" },
        ],
        blogSections: [
            {
                id: 1,
                title: "1. Meine Motivation",
                content: "Nach Jahren in der Gastronomie war klar: Es braucht neue Lösungen für altbekannte Probleme. NAF entstand aus dem Wunsch, Genuss und Effizienz zu vereinen.",
            },
            {
                id: 2,
                title: "2. Die Idee hinter NAF Automaten",
                content: "Unsere Automaten liefern in nur 3 Minuten frische, leckere Gerichte – ohne Stress, ohne Personalprobleme. Sie sind kleine Hightech-Restaurants für überall.",
            },
            {
                id: 3,
                title: "3. Was du hier erwarten kannst",
                content: "Dieser Blog zeigt dir unseren Alltag, unsere Ideen und unsere Mission – mehr als nur Technik, ein echtes Lebensgefühl.",
            },
        ],
    },
    {
        title: "Die Evolution der Gastronomie – Von Herd & Herz zu Hightech & Automaten",
        date: "11 March 2025",
        readTime: "7 Min Read",
        introText: "Die Gastronomie steht unter Druck. Personalmangel, steigende Kosten und neue Erwartungen zwingen uns zu neuen Lösungen. Die Antwort? Automatisierte, smarte Verpflegungslösungen.",
        tableOfContents: [
            { id: 1, title: "Die Krise der klassischen Gastronomie" },
            { id: 2, title: "Die Idee hinter der Automatisierung" },
            { id: 3, title: "Wie moderne Automaten helfen" },
            { id: 4, title: "Die Zukunft ist smart" },
        ],
        blogSections: [
            {
                id: 1,
                title: "1. Die Krise der klassischen Gastronomie",
                content: "Der klassische Betrieb – Küche, Koch, Kellner – stößt an seine Grenzen: zu wenig Personal, zu hohe Kosten, zu kurze Pausen für Gäste.",
            },
            {
                id: 2,
                title: "2. Die Idee hinter der Automatisierung",
                content: "Warum nicht Technologie nutzen, um Genuss effizienter zu gestalten? Automatisierung löst viele Probleme der klassischen Gastronomie.",
            },
            {
                id: 3,
                title: "3. Wie moderne Automaten helfen",
                content: "NAF Automaten liefern 24/7 gesunde Gerichte, sind hygienisch, kontaktlos und effizient – mit Kühl-, Heiz- und KI-Systemen.",
            },
            {
                id: 4,
                title: "4. Die Zukunft ist smart",
                content: "Die Gastronomie stirbt nicht – sie entwickelt sich weiter. Die Verbindung von Leidenschaft und Technologie ist der Weg in die Zukunft.",
            },
        ],
    },
    {
        title: "Automaten-Software im Vergleich – Die unsichtbare Kraft hinter dem Erfolg",
        date: "11 March 2025",
        readTime: "7 Min Read",
        introText: "Was viele nicht sehen: Die Software entscheidet über den Erfolg eines Automaten. Von Fernsteuerung bis Analyse – wir vergleichen führende Systeme.",
        tableOfContents: [
            { id: 1, title: "Warum die Software entscheidend ist" },
            { id: 2, title: "Die wichtigsten Anbieter im Vergleich" },
            { id: 3, title: "Worauf du achten solltest" },
            { id: 4, title: "Fazit: Augen auf bei der Softwarewahl" },
        ],
        blogSections: [
            {
                id: 1,
                title: "1. Warum die Software entscheidend ist",
                content: "Fehlererkennung, Verkaufsdaten, Fernsteuerung – moderne Cloud-Systeme optimieren Effizienz und Kundenzufriedenheit.",
            },
            {
                id: 2,
                title: "2. Die wichtigsten Anbieter im Vergleich",
                content: "Vergleich von Nayax, 4Suites, Vendon, NAF SmartCloud und Cantaloupe Seed Cloud – mit Fokus auf Flexibilität, Analyse und Integration.",
            },
            {
                id: 3,
                title: "3. Worauf du achten solltest",
                content: "Achte auf Live-Analysen, Fernzugriff, Zahlungsoptionen, Couponverwaltung und Update-Fähigkeit – besonders bei komplexen Standorten.",
            },
            {
                id: 4,
                title: "4. Fazit: Augen auf bei der Softwarewahl",
                content: "Die Software ist das Herz des Automaten. Wähle nicht nur den Automaten – wähle die Cloud, die deinen Erfolg steuert.",
            },
        ],
    }
];

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
                    blogImage={blogImage}
                    prevRoute={currentBlogIndex === 0 ? "/Insights" : null}
                    nextRoute={currentBlogIndex < blogData.length - 1 ? `/blog/${currentBlogIndex + 1}` : null}
                    dateIcon={dateImage}
                />
            </Box>
        </Box>
    );
};

export default BlogContainer;
