"use client"
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

interface TabDataItem {
    title: string;
    id: string;
    content: React.ReactNode;
}

const Tab_DATA: TabDataItem[] = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>jQuery</li>
                <li>Node JS</li>
                <li>Next JS</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Intermediate from Govt. Degree College, KARACHI, PAKISTAN</li>
                <li>Bachelor of Science in Computer Science</li>
            </ul>)
    },
    {
        title: "Certification",
        id: "certification",
        content: (
            <ul className='list-disc pl-2'>
                <li>Diploma Holder Of ACCP Prime 2.0 of Software Engineering</li>
                <li>Diploma Holder Of PIAIC of Artificial Intelligence</li>
            </ul>)
    }
];

// ... (import statements and TabDataItem interface)
const AboutSection = () => {
    const [tab, setTab] = useState<string>("skills"); // Specify the type here
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section id='about' className='text-white pt-6'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src="/image/myImage.jpg" width={400} height={400} alt={''} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        I am Umar Khan, a web developer proficient in HTML, CSS, JavaScript, and TypeScript, currently diving into Next.js. With a passion for creating dynamic and engaging user experiences, I bring a blend of creativity and technical expertise to every project. Eager to contribute in collaborative environments, I am committed to staying at the forefront of web development trends and technologies, ensuring proper handling of special characters like single quotes (&apos;).
                    </p>

                    <div className='flex flex-row mt-8'>
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
                        <TabButton selectTab={() => handleTabChange("certification")} active={tab === "certification"}>Certification</TabButton>
                    </div>

                    <div className='mt-8'>
                        {Tab_DATA.find((t) => t.id === tab)?.content || null}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
