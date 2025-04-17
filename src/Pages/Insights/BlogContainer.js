import { useNavigate } from "react-router-dom";
import { useState } from "react";
import blogImage from "../../assets/representations-user-experience-interface-design 1.png";
import arrowBack from "../../assets/Vector (4).png";
import arrowForward from "../../assets/Vector (5).png";
import dateImage from "../../assets/Vector (2).svg";
import BlogPage from "./BlogDetailPage";
import { Box, Button, Stack } from "@mui/material";

// Define all 7 blogs here
const blogData = [
    {
        title: "How UI/UX Design Can Boost Your Vending Machine Sales",
        date: "11 March 2025",
        readTime: "8 Min Read",
        introText: "One of the most significant ways UI design affects vending machine sales is through an intuitive interface. A confusing layout or unclear instructions can frustrate users, leading them to abandon their purchase. A well-designed UI simplifies the process, making it easy for customers to understand how to make selections, complete payments, and receive their products. Simple elements like a responsive touchscreen with clear buttons and prompts can drastically improve user interaction.",
        tableOfContents: [
            { id: 1, title: "Intuitive User Interface" },
            { id: 2, title: "Engaging Visuals and Branding" },
            { id: 3, title: "Seamless User Experience" },
            { id: 4, title: "Accessibility Considerations" },
            { id: 5, title: "Personalization and Adaptability" },
            { id: 6, title: "Building Trust through Security" },
            { id: 7, title: "Conclusion" },
        ],
        blogSections: [
            {
                id: 1,
                title: "1. Intuitive User Interface",
                content:
                    "One of the most significant ways UI design affects vending machine sales is through an intuitive interface. A confusing layout or unclear instructions can frustrate users, leading them to abandon their purchase. A well-designed UI simplifies the process, making it easy for customers to understand how to make selections, complete payments, and receive their products. Simple elements like a responsive touchscreen with clear buttons and prompts can drastically improve user interaction.",
            },
            {
                id: 2,
                title: "2. Engaging Visuals and Branding",
                content:
                    "First impressions count, and the visual design of a vending machine plays a crucial role in attracting potential customers. A modern, sleek appearance can draw attention, especially if it aligns with your brand's identity. Vibrant colors, cohesive branding, and high-quality graphics can create a machine that captivates and retains customers' interest. Well-placed promotional content on the display can also entice users with special offers or new product lines.",
            },
            {
                id: 3,
                title: "3. Seamless User Experience",
                content:
                    "Beyond aesthetics, a Seamless User Experience is paramount. The process should be fast and straightforward from start to finish, minimizing friction at every step. This involves optimizing the layout for quick navigation, offering multiple payment options, and ensuring quick product dispensation. Consider adding feedback mechanisms, such as thank-you messages, or receipt options, to leave a positive impression.",
            },
            {
                id: 4,
                title: "4. Accessibility Considerations",
                content:
                    "Incorporating accessibility into your vending machine design is not only a moral and legal obligation but also a strategic advantage. By designing for inclusivity, you ensure that all potential customers, including those with disabilities, can use your machines with ease. Features like height-adjustable interfaces, voice commands, Braille instructions, or larger text can make a significant difference.",
            },
            {
                id: 5,
                title: "5. Personalization and Adaptability",
                content:
                    "Modern consumers appreciate personalized experiences. Advanced vending machines can incorporate AI and data analytics to adapt their offerings based on user preferences and past purchase history. Employing these technologies within your UI/UX design can provide a customized experience, increasing the likelihood of repeat customers. Additionally, adaptability in the interface allows for easy integration of new products and features as trends evolve.",
            },
            {
                id: 6,
                title: "6. Building Trust through Security",
                content:
                    "Security features in vending machines are vital for building trust. A robust UX includes demonstrating the safety of transactions, particularly with digital payments. Display security credentials prominently and provide an option for digital receipts. Ensuring customers that their data is secure builds confidence and encourages usage.",
            },
            {
                id: 7,
                title: "Conclusion",
                content:
                    "Investing in UI/UX design for vending machines isn't just about creating a visually appealing product—it's about enhancing the overall customer experience. By prioritizing intuitive design, engaging visuals, seamless interactions, inclusivity, personalization, and security, you can significantly increase customer satisfaction and, consequently, boost your vending machine sales. As consumer expectations continue to rise, leveraging impactful design becomes essential in staying competitive and driving growth in the vending industry.",
            },
        ],
    },
    {
        title: "The Ultimate Guide to Choosing the Right Vending Machine for Your Business",
        date: "11 March 2025",
        readTime: "8 Min Read",
        introText: "In today's fast-paced world, convenience is king. As consumers increasingly seek quick and seamless purchasing experiences, vending machines are becoming more popular than ever. However, the true potential of vending machines is often untapped due to poor user interfaces (UI) and user experiences (UX). Investing in excellent UI/UX design can significantly enhance customer satisfaction and drive sales. Here, we explore how thoughtful design can transform your vending machine business.",
        tableOfContents: [
            { id: 1, title: "Intuitive User Interface" },
            { id: 2, title: "Engaging Visuals and Branding" },
            { id: 3, title: "Seamless User Experience" },
            { id: 4, title: "Accessibility Considerations" },
            { id: 5, title: "Personalization and Adaptability" },
            { id: 6, title: "Building Trust through Security" },
            { id: 7, title: "Conclusion" },
        ],
        blogSections: [
            {
                id: 1,
                title: "1. Intuitive User Interface",
                content:
                    "One of the most significant ways UI design affects vending machine sales is through an intuitive interface. A confusing layout or unclear instructions can frustrate users, leading them to abandon their purchase. A well-designed UI simplifies the process, making it easy for customers to understand how to make selections, complete payments, and receive their products. Simple elements like a responsive touchscreen with clear buttons and prompts can drastically improve user interaction.",
            },
            {
                id: 2,
                title: "2. Engaging Visuals and Branding",
                content:
                    "First impressions count, and the visual design of a vending machine plays a crucial role in attracting potential customers. A modern, sleek appearance can draw attention, especially if it aligns with your brand's identity. Vibrant colors, cohesive branding, and high-quality graphics can create a machine that captivates and retains customers' interest. Well-placed promotional content on the display can also entice users with special offers or new product lines.",
            },
            {
                id: 3,
                title: "3. Seamless User Experience",
                content:
                    "Beyond aesthetics, a seamless user experience is paramount. The process should be fast and straightforward from start to finish, minimizing friction at every step. This involves optimizing the layout for quick navigation, offering multiple payment options, and ensuring quick product dispensation. Consider adding feedback mechanisms, such as thank-you messages, or receipt options, to leave a positive impression.",
            },
            {
                id: 4,
                title: "4. Accessibility Considerations",
                content:
                    "Incorporating accessibility into your vending machine design is not only a moral and legal obligation but also a strategic advantage. By designing for inclusivity, you ensure that all potential customers, including those with disabilities, can use your machines with ease. Features like height-adjustable interfaces, voice commands, Braille instructions, or larger text can make a significant difference.",
            },
            {
                id: 5,
                title: "5. Personalization and Adaptability",
                content:
                    "Modern consumers appreciate personalized experiences. Advanced vending machines can incorporate AI and data analytics to adapt their offerings based on user preferences and past purchase history. Employing these technologies within your UI/UX design can provide a customized experience, increasing the likelihood of repeat customers. Additionally, adaptability in the interface allows for easy integration of new products and features as trends evolve.",
            },
            {
                id: 6,
                title: "6. Building Trust through Security",
                content:
                    "Security features in vending machines are vital for building trust. A robust UX includes demonstrating the safety of transactions, particularly with digital payments. Display security credentials prominently and provide an option for digital receipts. Ensuring customers that their data is secure builds confidence and encourages usage.",
            },
            {
                id: 7,
                title: "Conclusion",
                content:
                    "Investing in UI/UX design for vending machines isn't just about creating a visually appealing product—it's about enhancing the overall customer experience. By prioritizing intuitive design, engaging visuals, seamless interactions, inclusivity, personalization, and security, you can significantly increase customer satisfaction and, consequently, boost your vending machine sales. As consumer expectations continue to rise, leveraging impactful design becomes essential in staying competitive and driving growth in the vending industry.",
            },
        ],
    },
    {
        title: "The Power of UI/UX Design: Creating Engaging Vending Machine Experiences",
        date: "11 March 2025",
        readTime: "8 Min Read",
        introText: "In today's fast-paced world, convenience is king. As consumers increasingly seek quick and seamless purchasing experiences, vending machines are becoming more popular than ever. However, the true potential of vending machines is often untapped due to poor user interfaces (UI) and user experiences (UX). Investing in excellent UI/UX design can significantly enhance customer satisfaction and drive sales. Here, we explore how thoughtful design can transform your vending machine business.",
        tableOfContents: [
            { id: 1, title: "Intuitive User Interface" },
            { id: 2, title: "Engaging Visuals and Branding" },
            { id: 3, title: "Seamless User Experience" },
            { id: 4, title: "Accessibility Considerations" },
            { id: 5, title: "Personalization and Adaptability" },
            { id: 6, title: "Building Trust through Security" },
            { id: 7, title: "Conclusion" },
        ],
        blogSections: [
            {
                id: 1,
                title: "1. Intuitive User Interface",
                content:
                    "One of the most significant ways UI design affects vending machine sales is through an intuitive interface. A confusing layout or unclear instructions can frustrate users, leading them to abandon their purchase. A well-designed UI simplifies the process, making it easy for customers to understand how to make selections, complete payments, and receive their products. Simple elements like a responsive touchscreen with clear buttons and prompts can drastically improve user interaction.",
            },
            {
                id: 2,
                title: "2. Engaging Visuals and Branding",
                content:
                    "First impressions count, and the visual design of a vending machine plays a crucial role in attracting potential customers. A modern, sleek appearance can draw attention, especially if it aligns with your brand's identity. Vibrant colors, cohesive branding, and high-quality graphics can create a machine that captivates and retains customers' interest. Well-placed promotional content on the display can also entice users with special offers or new product lines.",
            },
            {
                id: 3,
                title: "3. Seamless User Experience",
                content:
                    "Beyond aesthetics, a seamless user experience is paramount. The process should be fast and straightforward from start to finish, minimizing friction at every step. This involves optimizing the layout for quick navigation, offering multiple payment options, and ensuring quick product dispensation. Consider adding feedback mechanisms, such as thank-you messages, or receipt options, to leave a positive impression.",
            },
            {
                id: 4,
                title: "4. Accessibility Considerations",
                content:
                    "Incorporating accessibility into your vending machine design is not only a moral and legal obligation but also a strategic advantage. By designing for inclusivity, you ensure that all potential customers, including those with disabilities, can use your machines with ease. Features like height-adjustable interfaces, voice commands, Braille instructions, or larger text can make a significant difference.",
            },
            {
                id: 5,
                title: "5. Personalization and Adaptability",
                content:
                    "Modern consumers appreciate personalized experiences. Advanced vending machines can incorporate AI and data analytics to adapt their offerings based on user preferences and past purchase history. Employing these technologies within your UI/UX design can provide a customized experience, increasing the likelihood of repeat customers. Additionally, adaptability in the interface allows for easy integration of new products and features as trends evolve.",
            },
            {
                id: 6,
                title: "6. Building Trust through Security",
                content:
                    "Security features in vending machines are vital for building trust. A robust UX includes demonstrating the safety of transactions, particularly with digital payments. Display security credentials prominently and provide an option for digital receipts. Ensuring customers that their data is secure builds confidence and encourages usage.",
            },
            {
                id: 7,
                title: "Conclusion",
                content:
                    "Investing in UI/UX design for vending machines isn't just about creating a visually appealing product—it's about enhancing the overall customer experience. By prioritizing intuitive design, engaging visuals, seamless interactions, inclusivity, personalization, and security, you can significantly increase customer satisfaction and, consequently, boost your vending machine sales. As consumer expectations continue to rise, leveraging impactful design becomes essential in staying competitive and driving growth in the vending industry.",
            },
        ],
    },
    {
        title: "Cloud-Based Vending Management: Streamline Your Operations and Maximize Efficiency",
        date: "11 March 2025",
        readTime: "8 Min Read",
        introText: "In today's fast-paced world, convenience is king. As consumers increasingly seek quick and seamless purchasing experiences, vending machines are becoming more popular than ever. However, the true potential of vending machines is often untapped due to poor user interfaces (UI) and user experiences (UX). Investing in excellent UI/UX design can significantly enhance customer satisfaction and drive sales. Here, we explore how thoughtful design can transform your vending machine business.",
        tableOfContents: [
            { id: 1, title: "Intuitive User Interface" },
            { id: 2, title: "Engaging Visuals and Branding" },
            { id: 3, title: "Seamless User Experience" },
            { id: 4, title: "Accessibility Considerations" },
            { id: 5, title: "Personalization and Adaptability" },
            { id: 6, title: "Building Trust through Security" },
            { id: 7, title: "Conclusion" },
        ],
        blogSections: [
            {
                id: 1,
                title: "1. Intuitive User Interface",
                content:
                    "One of the most significant ways UI design affects vending machine sales is through an intuitive interface. A confusing layout or unclear instructions can frustrate users, leading them to abandon their purchase. A well-designed UI simplifies the process, making it easy for customers to understand how to make selections, complete payments, and receive their products. Simple elements like a responsive touchscreen with clear buttons and prompts can drastically improve user interaction.",
            },
            {
                id: 2,
                title: "2. Engaging Visuals and Branding",
                content:
                    "First impressions count, and the visual design of a vending machine plays a crucial role in attracting potential customers. A modern, sleek appearance can draw attention, especially if it aligns with your brand's identity. Vibrant colors, cohesive branding, and high-quality graphics can create a machine that captivates and retains customers' interest. Well-placed promotional content on the display can also entice users with special offers or new product lines.",
            },
            {
                id: 3,
                title: "3. Seamless User Experience",
                content:
                    "Beyond aesthetics, a seamless user experience is paramount. The process should be fast and straightforward from start to finish, minimizing friction at every step. This involves optimizing the layout for quick navigation, offering multiple payment options, and ensuring quick product dispensation. Consider adding feedback mechanisms, such as thank-you messages, or receipt options, to leave a positive impression.",
            },
            {
                id: 4,
                title: "4. Accessibility Considerations",
                content:
                    "Incorporating accessibility into your vending machine design is not only a moral and legal obligation but also a strategic advantage. By designing for inclusivity, you ensure that all potential customers, including those with disabilities, can use your machines with ease. Features like height-adjustable interfaces, voice commands, Braille instructions, or larger text can make a significant difference.",
            },
            {
                id: 5,
                title: "5. Personalization and Adaptability",
                content:
                    "Modern consumers appreciate personalized experiences. Advanced vending machines can incorporate AI and data analytics to adapt their offerings based on user preferences and past purchase history. Employing these technologies within your UI/UX design can provide a customized experience, increasing the likelihood of repeat customers. Additionally, adaptability in the interface allows for easy integration of new products and features as trends evolve.",
            },
            {
                id: 6,
                title: "6. Building Trust through Security",
                content:
                    "Security features in vending machines are vital for building trust. A robust UX includes demonstrating the safety of transactions, particularly with digital payments. Display security credentials prominently and provide an option for digital receipts. Ensuring customers that their data is secure builds confidence and encourages usage.",
            },
            {
                id: 7,
                title: "Conclusion",
                content:
                    "Investing in UI/UX design for vending machines isn't just about creating a visually appealing product—it's about enhancing the overall customer experience. By prioritizing intuitive design, engaging visuals, seamless interactions, inclusivity, personalization, and security, you can significantly increase customer satisfaction and, consequently, boost your vending machine sales. As consumer expectations continue to rise, leveraging impactful design becomes essential in staying competitive and driving growth in the vending industry.",
            },
        ],
    },
    {
        title: "Top 5 Vending Machine Marketing Strategies to Attract More Customers",
        date: "11 March 2025",
        readTime: "8 Min Read",
        introText: "In today's fast-paced world, convenience is king. As consumers increasingly seek quick and seamless purchasing experiences, vending machines are becoming more popular than ever. However, the true potential of vending machines is often untapped due to poor user interfaces (UI) and user experiences (UX). Investing in excellent UI/UX design can significantly enhance customer satisfaction and drive sales. Here, we explore how thoughtful design can transform your vending machine business.",
        tableOfContents: [
            { id: 1, title: "Intuitive User Interface" },
            { id: 2, title: "Engaging Visuals and Branding" },
            { id: 3, title: "Seamless User Experience" },
            { id: 4, title: "Accessibility Considerations" },
            { id: 5, title: "Personalization and Adaptability" },
            { id: 6, title: "Building Trust through Security" },
            { id: 7, title: "Conclusion" },
        ],
        blogSections: [
            {
                id: 1,
                title: "1. Intuitive User Interface",
                content:
                    "One of the most significant ways UI design affects vending machine sales is through an intuitive interface. A confusing layout or unclear instructions can frustrate users, leading them to abandon their purchase. A well-designed UI simplifies the process, making it easy for customers to understand how to make selections, complete payments, and receive their products. Simple elements like a responsive touchscreen with clear buttons and prompts can drastically improve user interaction.",
            },
            {
                id: 2,
                title: "2. Engaging Visuals and Branding",
                content:
                    "First impressions count, and the visual design of a vending machine plays a crucial role in attracting potential customers. A modern, sleek appearance can draw attention, especially if it aligns with your brand's identity. Vibrant colors, cohesive branding, and high-quality graphics can create a machine that captivates and retains customers' interest. Well-placed promotional content on the display can also entice users with special offers or new product lines.",
            },
            {
                id: 3,
                title: "3. Seamless User Experience",
                content:
                    "Beyond aesthetics, a seamless user experience is paramount. The process should be fast and straightforward from start to finish, minimizing friction at every step. This involves optimizing the layout for quick navigation, offering multiple payment options, and ensuring quick product dispensation. Consider adding feedback mechanisms, such as thank-you messages, or receipt options, to leave a positive impression.",
            },
            {
                id: 4,
                title: "4. Accessibility Considerations",
                content:
                    "Incorporating accessibility into your vending machine design is not only a moral and legal obligation but also a strategic advantage. By designing for inclusivity, you ensure that all potential customers, including those with disabilities, can use your machines with ease. Features like height-adjustable interfaces, voice commands, Braille instructions, or larger text can make a significant difference.",
            },
            {
                id: 5,
                title: "5. Personalization and Adaptability",
                content:
                    "Modern consumers appreciate personalized experiences. Advanced vending machines can incorporate AI and data analytics to adapt their offerings based on user preferences and past purchase history. Employing these technologies within your UI/UX design can provide a customized experience, increasing the likelihood of repeat customers. Additionally, adaptability in the interface allows for easy integration of new products and features as trends evolve.",
            },
            {
                id: 6,
                title: "6. Building Trust through Security",
                content:
                    "Security features in vending machines are vital for building trust. A robust UX includes demonstrating the safety of transactions, particularly with digital payments. Display security credentials prominently and provide an option for digital receipts. Ensuring customers that their data is secure builds confidence and encourages usage.",
            },
            {
                id: 7,
                title: "Conclusion",
                content:
                    "Investing in UI/UX design for vending machines isn't just about creating a visually appealing product—it's about enhancing the overall customer experience. By prioritizing intuitive design, engaging visuals, seamless interactions, inclusivity, personalization, and security, you can significantly increase customer satisfaction and, consequently, boost your vending machine sales. As consumer expectations continue to rise, leveraging impactful design becomes essential in staying competitive and driving growth in the vending industry.",
            },
        ],
    },
    {
        title: "Navigating Vending Regulations: What You Need to Know to Stay Compliant",
        date: "11 March 2025",
        readTime: "8 Min Read",
        introText: "In today's fast-paced world, convenience is king. As consumers increasingly seek quick and seamless purchasing experiences, vending machines are becoming more popular than ever. However, the true potential of vending machines is often untapped due to poor user interfaces (UI) and user experiences (UX). Investing in excellent UI/UX design can significantly enhance customer satisfaction and drive sales. Here, we explore how thoughtful design can transform your vending machine business.",
        tableOfContents: [
            { id: 1, title: "Intuitive User Interface" },
            { id: 2, title: "Engaging Visuals and Branding" },
            { id: 3, title: "Seamless User Experience" },
            { id: 4, title: "Accessibility Considerations" },
            { id: 5, title: "Personalization and Adaptability" },
            { id: 6, title: "Building Trust through Security" },
            { id: 7, title: "Conclusion" },
        ],
        blogSections: [
            {
                id: 1,
                title: "1. Intuitive User Interface",
                content:
                    "One of the most significant ways UI design affects vending machine sales is through an intuitive interface. A confusing layout or unclear instructions can frustrate users, leading them to abandon their purchase. A well-designed UI simplifies the process, making it easy for customers to understand how to make selections, complete payments, and receive their products. Simple elements like a responsive touchscreen with clear buttons and prompts can drastically improve user interaction.",
            },
            {
                id: 2,
                title: "2. Engaging Visuals and Branding",
                content:
                    "First impressions count, and the visual design of a vending machine plays a crucial role in attracting potential customers. A modern, sleek appearance can draw attention, especially if it aligns with your brand's identity. Vibrant colors, cohesive branding, and high-quality graphics can create a machine that captivates and retains customers' interest. Well-placed promotional content on the display can also entice users with special offers or new product lines.",
            },
            {
                id: 3,
                title: "3. Seamless User Experience",
                content:
                    "Beyond aesthetics, a seamless user experience is paramount. The process should be fast and straightforward from start to finish, minimizing friction at every step. This involves optimizing the layout for quick navigation, offering multiple payment options, and ensuring quick product dispensation. Consider adding feedback mechanisms, such as thank-you messages, or receipt options, to leave a positive impression.",
            },
            {
                id: 4,
                title: "4. Accessibility Considerations",
                content:
                    "Incorporating accessibility into your vending machine design is not only a moral and legal obligation but also a strategic advantage. By designing for inclusivity, you ensure that all potential customers, including those with disabilities, can use your machines with ease. Features like height-adjustable interfaces, voice commands, Braille instructions, or larger text can make a significant difference.",
            },
            {
                id: 5,
                title: "5. Personalization and Adaptability",
                content:
                    "Modern consumers appreciate personalized experiences. Advanced vending machines can incorporate AI and data analytics to adapt their offerings based on user preferences and past purchase history. Employing these technologies within your UI/UX design can provide a customized experience, increasing the likelihood of repeat customers. Additionally, adaptability in the interface allows for easy integration of new products and features as trends evolve.",
            },
            {
                id: 6,
                title: "6. Building Trust through Security",
                content:
                    "Security features in vending machines are vital for building trust. A robust UX includes demonstrating the safety of transactions, particularly with digital payments. Display security credentials prominently and provide an option for digital receipts. Ensuring customers that their data is secure builds confidence and encourages usage.",
            },
            {
                id: 7,
                title: "Conclusion",
                content:
                    "Investing in UI/UX design for vending machines isn't just about creating a visually appealing product—it's about enhancing the overall customer experience. By prioritizing intuitive design, engaging visuals, seamless interactions, inclusivity, personalization, and security, you can significantly increase customer satisfaction and, consequently, boost your vending machine sales. As consumer expectations continue to rise, leveraging impactful design becomes essential in staying competitive and driving growth in the vending industry.",
            },
        ],
    },
    {
        title: "The Rise of Contactless Vending: Meeting the Demands of a Changing World",
        date: "11 March 2025",
        readTime: "8 Min Read",
        introText: "In today's fast-paced world, convenience is king. As consumers increasingly seek quick and seamless purchasing experiences, vending machines are becoming more popular than ever. However, the true potential of vending machines is often untapped due to poor user interfaces (UI) and user experiences (UX). Investing in excellent UI/UX design can significantly enhance customer satisfaction and drive sales. Here, we explore how thoughtful design can transform your vending machine business.",
        tableOfContents: [
            { id: 1, title: "Intuitive User Interface" },
            { id: 2, title: "Engaging Visuals and Branding" },
            { id: 3, title: "Seamless User Experience" },
            { id: 4, title: "Accessibility Considerations" },
            { id: 5, title: "Personalization and Adaptability" },
            { id: 6, title: "Building Trust through Security" },
            { id: 7, title: "Conclusion" },
        ],
        blogSections: [
            {
                id: 1,
                title: "1. Intuitive User Interface",
                content:
                    "One of the most significant ways UI design affects vending machine sales is through an intuitive interface. A confusing layout or unclear instructions can frustrate users, leading them to abandon their purchase. A well-designed UI simplifies the process, making it easy for customers to understand how to make selections, complete payments, and receive their products. Simple elements like a responsive touchscreen with clear buttons and prompts can drastically improve user interaction.",
            },
            {
                id: 2,
                title: "2. Engaging Visuals and Branding",
                content:
                    "First impressions count, and the visual design of a vending machine plays a crucial role in attracting potential customers. A modern, sleek appearance can draw attention, especially if it aligns with your brand's identity. Vibrant colors, cohesive branding, and high-quality graphics can create a machine that captivates and retains customers' interest. Well-placed promotional content on the display can also entice users with special offers or new product lines.",
            },
            {
                id: 3,
                title: "3. Seamless User Experience",
                content:
                    "Beyond aesthetics, a seamless user experience is paramount. The process should be fast and straightforward from start to finish, minimizing friction at every step. This involves optimizing the layout for quick navigation, offering multiple payment options, and ensuring quick product dispensation. Consider adding feedback mechanisms, such as thank-you messages, or receipt options, to leave a positive impression.",
            },
            {
                id: 4,
                title: "4. Accessibility Considerations",
                content:
                    "Incorporating accessibility into your vending machine design is not only a moral and legal obligation but also a strategic advantage. By designing for inclusivity, you ensure that all potential customers, including those with disabilities, can use your machines with ease. Features like height-adjustable interfaces, voice commands, Braille instructions, or larger text can make a significant difference.",
            },
            {
                id: 5,
                title: "5. Personalization and Adaptability",
                content:
                    "Modern consumers appreciate personalized experiences. Advanced vending machines can incorporate AI and data analytics to adapt their offerings based on user preferences and past purchase history. Employing these technologies within your UI/UX design can provide a customized experience, increasing the likelihood of repeat customers. Additionally, adaptability in the interface allows for easy integration of new products and features as trends evolve.",
            },
            {
                id: 6,
                title: "6. Building Trust through Security",
                content:
                    "Security features in vending machines are vital for building trust. A robust UX includes demonstrating the safety of transactions, particularly with digital payments. Display security credentials prominently and provide an option for digital receipts. Ensuring customers that their data is secure builds confidence and encourages usage.",
            },
            {
                id: 7,
                title: "Conclusion",
                content:
                    "Investing in UI/UX design for vending machines isn't just about creating a visually appealing product—it's about enhancing the overall customer experience. By prioritizing intuitive design, engaging visuals, seamless interactions, inclusivity, personalization, and security, you can significantly increase customer satisfaction and, consequently, boost your vending machine sales. As consumer expectations continue to rise, leveraging impactful design becomes essential in staying competitive and driving growth in the vending industry.",
            },
        ],
    },
];

const BlogContainer = () => {
    const navigate = useNavigate();
    const [currentBlogIndex, setCurrentBlogIndex] = useState(0); // Start at first blog

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
